// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Customer = {
  id_customer: string;
  name: string;
  phonenumber: number;
  platenumber: string;
  image_url:  string;
};

export type montir = {
  id_montir: string;
  nama_montir: string
  nomor_telepon: string;
  keahlian: string;
};


export type sukucadang = {
  name: string;
  price: string;
  stok: number; 
  merk: string; 
};

export type service = {
  name: string;
  date: Date;
  id_customer: string;
  id_montir: string;
  platenumber: string;
  price: number;
  cost_service: number;
  total: number; 
  payment: string;

};