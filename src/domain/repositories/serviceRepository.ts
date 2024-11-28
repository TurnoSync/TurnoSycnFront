// src/domain/repositories/ServiceRepository.ts

import { Service } from "../models/service";

export interface ServiceRepository {
  fetchServices(): Promise<Service[]>;
}
