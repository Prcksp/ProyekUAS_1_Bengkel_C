const { db } = require('@vercel/postgres');
const {
  customers,
  users,
  montir,
  sukucadang,
  service,
} = require('../app/lib/placeholder-data.js');

const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedCustomers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS customers (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        phonenumber BIGINT NOT NULL,
        platenumber VARCHAR(255) NOT NULL,
        image_url VARCHAR(255) NOT NULL
      );
    `;

    const insertedCustomers = await Promise.all(
      customers.map(
        (customer) => client.sql`
        INSERT INTO customers (id, name, phonenumber, platenumber, image_url)
        VALUES (${customer.id_customer}, ${customer.name}, ${customer.phonenumber}, ${customer.platenumber}, ${customer.image_url})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    return {
      createTable,
      customers: insertedCustomers,
    };
  } catch (error) {
    console.error('Error seeding customers:', error);
    throw error;
  }
}

async function seedMontir(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS montir (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        nama_montir VARCHAR(255) NOT NULL,
        nomor_telepon VARCHAR(255) NOT NULL,
        keahlian VARCHAR(255) NOT NULL
      );
    `;

    const insertedMontir = await Promise.all(
      montir.map(
        (item) => client.sql`
        INSERT INTO montir (id, nama_montir, nomor_telepon, keahlian)
        VALUES (${item.id_montir}, ${item.nama_montir}, ${item.nomor_telepon}, ${item.keahlian})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    return {
      createTable,
      montir: insertedMontir,
    };
  } catch (error) {
    console.error('Error seeding montir:', error);
    throw error;
  }
}

async function seedSukucadang(client) {
  try {
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS sukucadang (
        name VARCHAR(255) NOT NULL,
        price VARCHAR(255) NOT NULL,
        stok INT NOT NULL,
        merk VARCHAR(255) NOT NULL
      );
    `;

    const insertedSukucadang = await Promise.all(
      sukucadang.map(
        (item) => client.sql`
        INSERT INTO sukucadang (name, price, stok, merk)
        VALUES (${item.name}, ${item.price}, ${item.stok}, ${item.merk})
        ON CONFLICT (name) DO NOTHING;
      `,
      ),
    );

    return {
      createTable,
      sukucadang: insertedSukucadang,
    };
  } catch (error) {
    console.error('Error seeding sukucadang:', error);
    throw error;
  }
}

async function seedService(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS service (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        date DATE NOT NULL,
        id_customer UUID NOT NULL,
        id_montir UUID NOT NULL,
        platenumber VARCHAR(255) NOT NULL,
        price INT NOT NULL,
        cost_service INT NOT NULL,
        total INT NOT NULL,
        payment VARCHAR(255) NOT NULL
      );
    `;

    const insertedService = await Promise.all(
      service.map(
        (item) => client.sql`
        INSERT INTO service (name, date, id_customer, id_montir, platenumber, price, cost_service, total, payment)
        VALUES (${item.name}, ${item.date}, ${item.id_customer}, ${item.id_montir}, ${item.platenumber}, ${item.price}, ${item.cost_service}, ${item.total}, ${item.payment})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    return {
      createTable,
      service: insertedService,
    };
  } catch (error) {
    console.error('Error seeding service:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedCustomers(client);
  await seedMontir(client);
  await seedSukucadang(client);
  await seedService(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});