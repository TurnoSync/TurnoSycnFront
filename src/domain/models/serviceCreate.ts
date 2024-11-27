// src/domain/models/serviceCreate.ts

export interface ServiceCreate {
  name: string;
  description: string | null;
  duration: number;
  price: number;
  storeId: number;
}
