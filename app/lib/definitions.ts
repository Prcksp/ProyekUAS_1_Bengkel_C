import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Key, ReactNode } from "react";

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
  id: string | number | null | undefined;
  image_url: string | StaticImport;
  amount: ReactNode;
  email: ReactNode;
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
