// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const customers = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    phonenumber: '085371345625',
    platenumber: 'B 474 BOZ',
    image_url: '/customers/delba-de-oliveira.png',
  }
];

const montir = [
  {
    id: '08a1fcd2-e282-4c78-b577-6d3793fa7716',
    nama_montir: 'Johan Delby',
    nomor_telepon: '089412343412',
    keahlian: 'Ganti Ban',
  }
];

const sukucadang = [
  {
    id: 'f2798258-74f1-468a-a0ac-54a2ad69ee13',
    sukucadang_name: 'oli',
    sukucadang_price: 100000,
    stok: 20,
    merk: 'bosch',
  }
];

const service = [
  {
    id: '9b6d2c77-8e1c-4879-94f0-d163c1e8a0e1',
    id_customer: customers[0].id,
    id_montir: montir[0].id,
    id_sukucadang: sukucadang[0].id,
    sukucadang_price: 100000,
    amount: 2,
    cost_service: 200000,
    total: 400000,
    payment: 'Tunai',
    date: '2024-03-12',
  }
];

module.exports = {
  users,
  customers,
  montir,
  sukucadang,
  service,
};
