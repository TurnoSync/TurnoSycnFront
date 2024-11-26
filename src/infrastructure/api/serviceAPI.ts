// src/infrastructure/api/ServiceAPI.ts

import { Service } from "../../domain/models/service";
import { ServiceRepository } from "../../domain/repositories/serviceRepository";

export class ServiceAPI implements ServiceRepository {
  private readonly endpoint = "http://localhost:3000/api/services";

  async fetchServices(): Promise<Service[]> {
    const response = await fetch(this.endpoint);
    if (!response.ok) throw new Error("Failed to fetch services");
    return response.json();
  }
}
