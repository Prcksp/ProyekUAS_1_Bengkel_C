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
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    phonenumber: '085485671324',
    platenumber: 'BH 151 TT',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    name: 'Hector Simpson',
    phonenumber: '08854132475344',
    platenumber: 'DD 8080 YUK',
    image_url: '/customers/hector-simpson.png',
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    name: 'Steven Tey',
    phonenumber: '085107891243',
    platenumber: 'D 041 BU',
    image_url: '/customers/steven-tey.png',
  },
  {
    id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
    name: 'Steph Dietz',
    phonenumber: '089413240789',
    platenumber: 'AB 1305 XL',
    image_url: '/customers/steph-dietz.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    phonenumber: '085756438567',
    platenumber: 'H 410 DEK',
    image_url: '/customers/michael-novotny.png',
  },
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    phonenumber: '056832545687',
    platenumber: 'D 14 RE',
    image_url: '/customers/evil-rabbit.png',
  },
  {
    id: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
    name: 'Emil Kowalski',
    phonenumber: '08565439786',
    platenumber : 'B 7490 AN',
    image_url: '/customers/emil-kowalski.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    phonenumber: '0897325486765',
    platenumber: 'B 8355 TIE',
    image_url: '/customers/amy-burns.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    phonenumber: '0789532496787',
    platenumber: 'B 451 TAU',
    image_url: '/customers/balazs-orban.png',
  },
];

const montir = [
  {
    id_montir: '410544b2-4001-4271-9855-mtr-0022',
    nama_montir: 'Johan Delby',
    nomor_telepon: '0894-1234-3412',
    keahlian: 'Ganti Ban',
  },
  {
    id_montir: '410544b2-4001-4271-9855-mtr-0043',
    nama_montir: 'Aldo Tanu Wijaya',
    nomor_telepon: '0843-2345-1332',
    keahlian: 'serba bisa',
  },
  {
    id_montir: '410544b2-4001-4271-9855-mtr-0048',
    nama_montir: 'Irvandi Ferdinan',
    nomor_telepon: '0855-9983-5435',
    keahlian: 'Pemasangan body kendaraan',
  },
  {
    id_montir: '410544b2-4001-4271-9855-mtr-0049',
    nama_montir: 'Felix Sampurna',
    nomor_telepon: '0853-4323-5454',
    keahlian: 'Bongkar muat piston',
  },
  {
    id_montir: '410544b2-4001-4271-9855-mtr-0076',
    nama_montir: 'BennjyFishy',
    nomor_telepon: '0853-4366-3424',
    keahlian: 'Mengatur jalur kelistrikan Lampu',
  },
];

const sukucadang = [
  {
    nama: 'oli',
    price: 'Rp.100.000',
    stok: '20',
    merk: 'bosch',
  },
  {
    nama: 'ban',
    price: 'Rp.500.000',
    stok: '40',
    merk: 'bridgestone',
  },
  {
    nama: 'velg',
    price: 'Rp.1.000.000',
    stok: '20',
    merk: 'enkai',
  },
  {
    nama: 'knalpot',
    price: 'Rp.2.000.000',
    stok: '15',
    merk: 'borla',
  },
  {
    nama: 'spion',
    price: 'Rp.200.000',
    stok: '20',
    merk: 'OEM',
  },
  {
    nama: 'aki',
    price: 'Rp.1.000.000',
    stok: '10',
    merk: 'GS astra',
  },
  {
    nama: 'kaca depan',
    price: 'Rp.5.000.000',
    stok: '15',
    merk: 'OEM',
  },
  {
    nama: 'pompa oli',
    price: 'Rp.1.200.000',
    stok: '10',
    merk: 'aisin',
  },
  {
    nama: 'piston',
    price: 'Rp.500.000',
    stok: '7',
    merk: 'NPR',
  },
  {
    nama: 'ring piston',
    price: 'Rp.300.000',
    stok: '7',
    merk: 'NPR',
  },
  {
    nama: 'radiator',
    price: 'Rp.2.000.000',
    stok: '10',
    merk: 'koyoard',
  },
  {
    nama: 'shock',
    price: 'Rp.1.500.000',
    stok: '10',
    merk: 'KYB',
  },
  {
    nama: 'alternator',
    price: 'Rp.3.000.000',
    stok: '5',
    merk: 'bosch',
  },
  {
    nama: 'injektor',
    price: 'Rp.1.000.000',
    stok: '9',
    merk: 'denso',
  },
  {
    nama: 'konverter',
    price: 'Rp.5.000.000',
    stok: '10',
    merk: 'walker',
  },
];

const service = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

module.exports = {
  users,
  customers,
  invoices,
  revenue,
};
