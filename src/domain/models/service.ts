// src/domain/models/Service.ts

export interface Service {
  id: number;
  name: string;
  description: string | null;
  duration: number;
  price: number;
  storeId: number;
}
