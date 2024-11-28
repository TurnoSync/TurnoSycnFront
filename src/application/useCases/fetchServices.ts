// src/application/useCases/FetchServices.ts

import { Service } from "../../domain/models/service";
import { ServiceRepository } from "../../domain/repositories/serviceRepository";

export class FetchServices {
  constructor(private serviceRepository: ServiceRepository) {}

  async execute(): Promise<Service[]> {
    return this.serviceRepository.fetchServices();
  }
}
