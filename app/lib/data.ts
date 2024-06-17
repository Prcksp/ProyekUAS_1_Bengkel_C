import { sql } from '@vercel/postgres';
import { unstable_noStore } from 'next/cache';
// import { formatCurrency } from './utils';
import {
  // CustomerField,
  CustomersTable,
  CustomerField,
  CustomerForm,
  LatestCustomersRaw,
  // CustomersTableType,
  // InvoiceForm,
  // InvoicesTable,
  // LatestInvoiceRaw,
  User,
  Montir,
  MontirForm,
  MontirTable,
  MontirField,
  LatestMontirRaw,
  Customer,
  Service,
  Sukucadang,
  SukucadangField,
  SukucadangTable,
  ServiceTable,
  ServiceForm,
  ServiceField,
  LatestServiceRaw,
  SukucadangForm,
  LatestSukuCadangRaw,
  // Revenue,
} from './definitions';
const ITEMS_PER_PAGE = 6;
const MAX_RETRIES = 3;
const RETRY_DELAY = 30000;

export async function getUser(email: string) {
  unstable_noStore();
  try {
    await new Promise((resolve) => setTimeout(resolve, 30000));
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0] as User;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export async function fetchCardData() {
  unstable_noStore();
  try {
    // await new Promise((resolve) => setTimeout(resolve, 30000));
    const customerCountPromise = sql`SELECT COUNT(*) FROM customers`;
    const montirCountPromise = sql`SELECT COUNT(*) FROM montir`;
    const sukucadangCountPromise = sql`SELECT COUNT(*) FROM sukucadang`;
    const serviceCountPromise = sql`SELECT COUNT(*) FROM service`;

    const data = await Promise.all([
      customerCountPromise,
      montirCountPromise,
      sukucadangCountPromise,
      serviceCountPromise,
    ]);

    const numberOfCustomers = Number(data[0].rows[0].count ?? '0');
    const numberOfMontir = Number(data[1].rows[0].count ?? '0');
    const numberOfStok = Number(data[2].rows[0].count ?? '0');
    const numberOfService = Number(data[3].rows[0].count ?? '0');

    return {
      numberOfCustomers,
      numberOfMontir,
      numberOfStok,
      numberOfService,
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

// Customers //

export async function fetchCustomers() {
  unstable_noStore();
  try {
    // await new Promise((resolve) => setTimeout(resolve, 30000));
    const data = await sql<CustomerField>`
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

export async function fetchFilteredCustomers(query: string, currentPage: number,) {
  unstable_noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    // await new Promise((resolve) => setTimeout(resolve, 30000));
    const customers = await sql<CustomersTable>`
		SELECT *
		FROM customers
		WHERE
		  customers.name ILIKE ${`%${query}%`} OR
      customers.phonenumber::text ILIKE ${`%${query}%`} OR
      customers.platenumber::text ILIKE ${`%${query}%`} OR
      customers.image_url ILIKE ${`%${query}%`}
		GROUP BY customers.id, customers.name, customers.phonenumber, customers.platenumber, customers.image_url
		ORDER BY customers.name ASC
    LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
	  `;

    return customers.rows;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch customer table.');
  }
}

export async function fetchCustomersPages(query: string) {
  unstable_noStore();
  try {
    // await new Promise((resolve) => setTimeout(resolve, 30000));
    const count = await sql `SELECT COUNT(*)
    FROM customers
    WHERE
      customers.name ILIKE ${`%${query}%`} OR
      customers.phonenumber::text ILIKE ${`%${query}%`} OR
      customers.platenumber::text ILIKE ${`%${query}%`} OR
      customers.image_url ILIKE ${`%${query}%`}
    `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of customers.');
  }
}

export async function fetchCustomerById(id: string) {
  unstable_noStore();
  try {
    // await new Promise((resolve) => setTimeout(resolve, 30000));
    const data = await sql<CustomerForm>`
      SELECT
        customers.id,
        customers.name,
        customers.phonenumber,
        customers.platenumber,
        customers.image_url
      FROM customers
      WHERE customers.id = ${id};
    `;

    const customers = data.rows.map((customer) => ({
      ...customer,
    }));

    return customers[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch customer.');
  }
}

export async function fetchLatestCustomers() {
  let retries = 0;
  
  // Retry logic
  while (retries < MAX_RETRIES) {
    try {
      const data = await sql<LatestCustomersRaw>`
        SELECT customers.name, customers.phonenumber, customers.platenumber, customers.image_url
        FROM customers
        ORDER BY customers.name DESC
        LIMIT 5`;

      const latestCustomers = data.rows.map((customers) => ({
        ...customers,
      }));
      return latestCustomers;
    } catch (error:any) {
      console.error('Database Error:', error);
      if (error.code === 'ETIMEDOUT' || error.code === 'ECONNRESET') {
        // Retry if there is a timeout or connection reset error
        retries++;
        console.log(`Retrying... Attempt ${retries}`);
        await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
      } else {
        throw new Error('Failed to fetch the latest customers.');
      }
    }
  }

  throw new Error('Max retries reached. Failed to fetch the latest invoices.');
}

// Montir //

export async function fetchMontir() {
  unstable_noStore();
  try {
    // await new Promise((resolve) => setTimeout(resolve, 30000));
    const data = await sql<MontirField>`
      SELECT
        id,
        nama_montir
      FROM montir
      ORDER BY nama_montir ASC
    `;

    const montir = data.rows;
    return montir;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all montir.');
  }
}

export async function fetchFilteredMontir(query: string, currentPage: number,) {
  unstable_noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const montir = await sql<MontirTable>`
		SELECT *
		FROM montir
		WHERE
		  montir.nama_montir ILIKE ${`%${query}%`} OR
      montir.nomor_telepon::text ILIKE ${`%${query}%`} OR
      montir.keahlian ILIKE ${`%${query}%`}
		GROUP BY montir.id, montir.nama_montir, montir.nomor_telepon, montir.keahlian
    LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
	  `;

    return montir.rows;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch montir table.');
  }
}

export async function fetchMontirPages(query: string) {
  unstable_noStore();
  try {
    // await new Promise((resolve) => setTimeout(resolve, 30000));
    const count = await sql `SELECT COUNT(*)
    FROM montir
    WHERE
      montir.nama_montir ILIKE ${`%${query}%`} OR
      montir.nomor_telepon ILIKE ${`%${query}%`} OR
      montir.keahlian ILIKE ${`%${query}%`}
    `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of montir.');
  }
}

export async function fetchMontirById(id: string) {
  unstable_noStore();
  try {
    // await new Promise((resolve) => setTimeout(resolve, 30000));
    const data = await sql<MontirForm>`
      SELECT
        montir.id,
        montir.nama_montir,
        montir.nomor_telepon,
        montir.keahlian
      FROM montir
      WHERE montir.id = ${id};
    `;

    const montir = data.rows.map((montir) => ({
      ...montir,
    }));

    return montir[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch montir.');
  }
}

export async function fetchLatestMontir() {
  let retries = 0;
  
  // Retry logic
  while (retries < MAX_RETRIES) {
    try {
      const data = await sql<LatestMontirRaw>`
        SELECT montir.nama_montir, montir.nomor_telepon, montir.keahlian
        FROM montir
        ORDER BY montir.nama_montir DESC
        LIMIT 5`;

      const latestMontir = data.rows.map((montir) => ({
        ...montir,
      }));
      return latestMontir;
    } catch (error:any) {
      console.error('Database Error:', error);
      if (error.code === 'ETIMEDOUT' || error.code === 'ECONNRESET') {
        // Retry if there is a timeout or connection reset error
        retries++;
        console.log(`Retrying... Attempt ${retries}`);
        await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
      } else {
        throw new Error('Failed to fetch the latest montir.');
      }
    }
  }

  throw new Error('Max retries reached. Failed to fetch the latest invoices.');
}

// Stock //

export async function fetchStock() {
  unstable_noStore();
  try {
    // await new Promise((resolve) => setTimeout(resolve, 30000));
    const data = await sql<SukucadangField>`
      SELECT *
      FROM sukucadang
      ORDER BY sukucadang_name ASC
    `;

    const sukucadang = data.rows;
    return sukucadang;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all Stok.');
  }
}

export async function fetchFilteredStock(query: string, currentPage: number,) {
  unstable_noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const sukucadang = await sql<SukucadangTable>`
		SELECT *
		FROM sukucadang
		WHERE
		  sukucadang.sukucadang_name ILIKE ${`%${query}%`} OR
      sukucadang.sukucadang_price::text ILIKE ${`%${query}%`} OR
      sukucadang.stok::text ILIKE ${`%${query}%`} OR
      sukucadang.merk ILIKE ${`%${query}%`}
		GROUP BY sukucadang.id, sukucadang.sukucadang_name, sukucadang.sukucadang_price, sukucadang.stok, sukucadang.merk
    LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
	  `;

    return sukucadang.rows;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch sukucadang table.');
  }
}

export async function fetchStockPages(query: string) {
  unstable_noStore();
  try {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    const count = await sql `SELECT COUNT(*)
    FROM sukucadang
    WHERE
      sukucadang.sukucadang_name ILIKE ${`%${query}%`} OR
      sukucadang.sukucadang_price::text ILIKE ${`%${query}%`} OR
      sukucadang.stok::text ILIKE ${`%${query}%`} OR
      sukucadang.merk ILIKE ${`%${query}%`}
    `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of stok.');
  }
}

export async function fetchStockById(id: string) {
  unstable_noStore();
  try {
    // await new Promise((resolve) => setTimeout(resolve, 30000));
    const data = await sql<SukucadangForm>`
      SELECT
        sukucadang.id,
        sukucadang.sukucadang_name,
        sukucadang.sukucadang_price,
        sukucadang.stok,
        sukucadang.merk
      FROM sukucadang
      WHERE sukucadang.id = ${id};
    `;

    const sukucadang = data.rows.map((sukucadang) => ({
      ...sukucadang,
    }));

    return sukucadang[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Stok.');
  }
}

export async function fetchLatestStock() {
  let retries = 0;
  
  // Retry logic
  while (retries < MAX_RETRIES) {
    try {
      const data = await sql<LatestSukuCadangRaw>`
        SELECT sukucadang.sukucadang_name, sukucadang.sukucadang_price, sukucadang.stok, sukucadang.merk
        FROM sukucadang
        ORDER BY sukucadang.sukucadang_name DESC
        LIMIT 5`;

      const latestStock = data.rows.map((stock) => ({
        ...stock,
      }));
      return latestStock;
    } catch (error:any) {
      console.error('Database Error:', error);
      if (error.code === 'ETIMEDOUT' || error.code === 'ECONNRESET') {
        // Retry if there is a timeout or connection reset error
        retries++;
        console.log(`Retrying... Attempt ${retries}`);
        await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
      } else {
        throw new Error('Failed to fetch the latest stock.');
      }
    }
  }

  throw new Error('Max retries reached. Failed to fetch the latest invoices.');
}

// Service //

export async function fetchService() {
  unstable_noStore();
  try {
    // await new Promise((resolve) => setTimeout(resolve, 30000));
    const data = await sql<ServiceField>`
      SELECT *
      FROM service
    `;

    const service = data.rows;
    return service;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all service.');
  }
}

export async function fetchFilteredService(query: string, currentPage: number,) {
  unstable_noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const service = await sql<ServiceTable>`
		SELECT
      service.id,
      service.id_customer,
      service.id_montir,
      service.id_sukucadang,
      service.amount,
      service.cost_service,
      service.total,
      service.payment,
      service.date,
      customers.platenumber,
      montir.nama_montir,
      sukucadang.sukucadang_price
		FROM service
    JOIN customers ON service.id_customer = customers.id
    JOIN montir ON service.id_montir = montir.id
    JOIN sukucadang ON service.id_sukucadang = sukucadang.id
		WHERE
      customers.platenumber::text ILIKE ${`%${query}%`} OR
      montir.nama_montir ILIKE ${`%${query}%`} OR
      sukucadang.sukucadang_price::text ILIKE ${`%${query}%`} OR
      service.amount::text ILIKE ${`%${query}%`} OR
      service.cost_service::text ILIKE ${`%${query}%`} OR
      service.total::text ILIKE ${`%${query}%`} OR
      service.payment ILIKE ${`%${query}%`} OR
      service.date::text ILIKE ${`%${query}%`}
		ORDER BY service.date DESC
    LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
	  `;

    return service.rows;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch service table.');
  }
}

export async function fetchServicePages(query: string) {
  unstable_noStore();
  try {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    const count = await sql `SELECT COUNT(*)
    FROM service
    WHERE
      service.date::text ILIKE ${`%${query}%`}
    `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of pages.');
  }
}

export async function fetchServiceById(id: string) {
  unstable_noStore();
  try {
    // await new Promise((resolve) => setTimeout(resolve, 30000));
    const data = await sql<ServiceForm>`
      SELECT
        service.id,
        service.id_customer,
        service.id_montir,
        service.id_sukucadang,
        service.sukucadang_price,
        service.amount,
        service.cost_service,
        service.total,
        service.payment
      FROM service
      WHERE service.id = ${id};
    `;

    const service = data.rows.map((service) => ({
      ...service,
    }));

    return service[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Stok.');
  }
}

export async function fetchLatestService() {
  let retries = 0;
  
  // Retry logic
  while (retries < MAX_RETRIES) {
    try {
      const data = await sql<LatestServiceRaw>`
        SELECT service.cost_service, service.total, service.payment, customers.name
        FROM service
        JOIN customers ON service.id_customer = customers.id
        ORDER BY service.date DESC
        LIMIT 5`;

      const latestService = data.rows.map((service) => ({
        ...service
      }));
      return latestService;
    } catch (error:any) {
      console.error('Database Error:', error);
      if (error.code === 'ETIMEDOUT' || error.code === 'ECONNRESET') {
        // Retry if there is a timeout or connection reset error
        retries++;
        console.log(`Retrying... Attempt ${retries}`);
        await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
      } else {
        throw new Error('Failed to fetch the latest service.');
      }
    }
  }

  throw new Error('Max retries reached. Failed to fetch the latest invoices.');
}