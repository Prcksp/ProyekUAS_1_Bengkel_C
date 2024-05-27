import { sql } from '@vercel/postgres';
import {
  Customer,
  montir,
  sukucadang,
  service,
  User,
} from './definitions';
import { formatCurrency } from './utils';

export async function fetchRevenue() {
  try {
    const data = await sql`SELECT SUM(price) AS revenue FROM service`;
    return data.rows[0].revenue;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function fetchLatestServices() {
  try {
    const data = await sql`
      SELECT service.name, service.date, customers.name AS customer_name, montir.nama_montir AS montir_name, service.total
      FROM service
      JOIN customers ON service.id_customer = customers.id
      JOIN montir ON service.id_montir = montir.id
      ORDER BY service.date DESC
      LIMIT 5`;

    return data.rows.map((service) => ({
      ...service,
      total: formatCurrency(service.total),
    }));
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest services.');
  }
}

export async function fetchCardData() {
  try {
    const serviceCountPromise = sql`SELECT COUNT(*) FROM service`;
    const customerCountPromise = sql`SELECT COUNT(*) FROM customers`;
    const serviceStatusPromise = sql`SELECT
         SUM(CASE WHEN payment = 'Tunai' THEN total ELSE 0 END) AS "tunai",
         SUM(CASE WHEN payment = 'Transfer Bank' THEN total ELSE 0 END) AS "transfer_bank",
         SUM(CASE WHEN payment = 'Kartu Kredit' THEN total ELSE 0 END) AS "kartu_kredit"
         FROM service`;

    const data = await Promise.all([
      serviceCountPromise,
      customerCountPromise,
      serviceStatusPromise,
    ]);

    const numberOfServices = Number(data[0].rows[0].count ?? '0');
    const numberOfCustomers = Number(data[1].rows[0].count ?? '0');
    const totalTunai = formatCurrency(data[2].rows[0].tunai ?? '0');
    const totalTransferBank = formatCurrency(data[2].rows[0].transfer_bank ?? '0');
    const totalKartuKredit = formatCurrency(data[2].rows[0].kartu_kredit ?? '0');

    return {
      numberOfCustomers,
      numberOfServices,
      totalTunai,
      totalTransferBank,
      totalKartuKredit,
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredServices(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const services = await sql`
      SELECT
        service.id,
        service.name,
        service.date,
        service.total,
        customers.name AS customer_name,
        montir.nama_montir AS montir_name
      FROM service
      JOIN customers ON service.id_customer = customers.id
      JOIN montir ON service.id_montir = montir.id
      WHERE
        customers.name ILIKE ${`%${query}%`} OR
        montir.nama_montir ILIKE ${`%${query}%`} OR
        service.name ILIKE ${`%${query}%`} OR
        service.date::text ILIKE ${`%${query}%`}
      ORDER BY service.date DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return services.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch services.');
  }
}

export async function fetchServicesPages(query: string) {
  try {
    const count = await sql`SELECT COUNT(*)
    FROM service
    JOIN customers ON service.id_customer = customers.id
    JOIN montir ON service.id_montir = montir.id
    WHERE
      customers.name ILIKE ${`%${query}%`} OR
      montir.nama_montir ILIKE ${`%${query}%`} OR
      service.name ILIKE ${`%${query}%`} OR
      service.date::text ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of services.');
  }
}

export async function fetchServiceById(id: string) {
  try {
    const data = await sql`
      SELECT
        service.id,
        service.name,
        service.date,
        service.total,
        service.payment,
        customers.name AS customer_name,
        montir.nama_montir AS montir_name,
        sukucadang.name AS sukucadang_name
      FROM service
      JOIN customers ON service.id_customer = customers.id
      JOIN montir ON service.id_montir = montir.id
      JOIN sukucadang ON service.platenumber = sukucadang.name
      WHERE service.id = ${id};
    `;

    const service = data.rows.map((service) => ({
      ...service,
      total: formatCurrency(service.total),
    }));

    return service[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch service.');
  }
}

export async function fetchCustomers() {
  try {
    const data = await sql`
      SELECT
        id,
        name
      FROM customers
      ORDER BY name ASC
    `;

    const customers = data.rows;
    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all customers.');
  }
}

export async function fetchFilteredCustomers(query: string) {
  try {
    const data = await sql`
    SELECT
      customers.id,
      customers.name,
      customers.phonenumber,
      customers.platenumber,
      customers.image_url,
      COUNT(service.id) AS total_services,
      SUM(CASE WHEN service.payment = 'Tunai' THEN service.total ELSE 0 END) AS total_tunai,
      SUM(CASE WHEN service.payment = 'Transfer Bank' THEN service.total ELSE 0 END) AS total_transfer_bank,
      SUM(CASE WHEN service.payment = 'Kartu Kredit' THEN service.total ELSE 0 END) AS total_kartu_kredit
    FROM customers
    LEFT JOIN service ON customers.id = service.id_customer
    WHERE
      customers.name ILIKE ${`%${query}%`} OR
      customers.phonenumber::text ILIKE ${`%${query}%`}
    GROUP BY customers.id, customers.name, customers.phonenumber, customers.platenumber, customers.image_url
    ORDER BY customers.name ASC
  `;

    const customers = data.rows.map((customer) => ({
      ...customer,
      total_tunai: formatCurrency(customer.total_tunai),
      total_transfer_bank: formatCurrency(customer.total_transfer_bank),
      total_kartu_kredit: formatCurrency(customer.total_kartu_kredit),
    }));

    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch customer table.');
  }
}

export async function getUser(email: string) {
  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0] as User;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
