export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};
// END USERS //

export type Customer = {
  id: string;
  name: string;
  image_url:  string;
  phonenumber: string;
  platenumber: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type CustomersTable = {
  id: string;
  name: string;
  phonenumber: string;
  platenumber: string;
  image_url: string;
};

export type CustomerForm = {
  id: string;
  name: string;
  phonenumber: string;
  platenumber: string;
  image_url: string;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  phonenumber: string;
  platenumber: string;
  image_url: string;
};

export type LatestCustomersRaw = Omit<Customer, 'amount'> & {
  amount: number;
};
// END CUSTOMERS //

export type Montir = {
  id: string;
  nama_montir: string;
  nomor_telepon: string;
  keahlian: string;
};

export type MontirTable = {
  id: string;
  nama_montir: string;
  nomor_telepon: string;
  keahlian: string;
};

export type MontirForm = {
  id: string;
  nama_montir: string;
  nomor_telepon: string;
  keahlian: string;
};

export type MontirField = {
  id: string;
  nama_montir: string;
};

export type LatestMontirRaw = Omit<Montir, 'amount'> & {
  amount: number;
};
// END MONTIR //

export type Sukucadang = {
  id: string;
  sukucadang_name: string;
  sukucadang_price: number;
  stok: number; 
  merk: string; 
};

export type SukucadangTable = {
  id: string;
  sukucadang_name: string;
  sukucadang_price: number;
  stok: number; 
  merk: string; 
};

export type SukucadangField = {
  id: string;
  sukucadang_name: string;
  sukucadang_price: number;
  stok: number; 
  merk: string; 
};

export type SukucadangForm = {
  id: string;
  sukucadang_name: string;
  sukucadang_price: number;
  stok: number; 
  merk: string; 
};

export type LatestSukuCadangRaw = Omit<Sukucadang, 'amount'> & {
  amount: number;
};

export type Service = {
  id: string;
  id_customer: string;
  id_montir: string;
  id_sukucadang: string;
  sukucadang_price:number;
  amount: number;
  cost_service: number;
  total: number; 
  payment: string;
  date: string;
};

export type ServiceTable = {
  id: string;
  id_customer: string;
  id_montir: string;
  id_sukucadang: string;
  platenumber: string;
  nama_montir: string;
  sukucadang_price: number;
  amount: number;
  cost_service: number;
  total: number; 
  payment: string;
  date: string;
}

export type ServiceForm = {
  id: string;
  id_customer: string;
  id_montir: string;
  id_sukucadang: string;
  sukucadang_price:number;
  amount: number;
  cost_service: number;
  total: number; 
  payment: string;
  date: string;
}

export type ServiceField = {
  id: string;
  id_customer: string;
  id_montir: string;
  id_sukucadang: string;
  sukucadang_price:number;
  amount: number;
  cost_service: number;
  total: number; 
  payment: string;
  date: string;
}

export type LatestServiceRaw = Omit<Service, 'amount'> & {
  amount: number;
  name: string;
};