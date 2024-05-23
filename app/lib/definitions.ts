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
  id: string;
  name: string;
  number: Number;
  plat: string;
  merk: string;
};

export type montir = {
  id: string;
  montir_id: string;
  amount: number;
  date: string;
  skill: string;
};


export type sukucadang = {
  id: string;
  name: string;
  buyprice: number; 
  sellingprice: number;
  stok: number; 
  merk: string; 
};

export type service = {
  id: string;
  name: string;
  date: string;
  id_customer: string;
  id_montir: string;
  id_kendaraan: string;
  cost_sukucadang: number;
  cost_service: number;
  total: number; 
  payment: string;

};

