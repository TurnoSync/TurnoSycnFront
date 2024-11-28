// src/infrastructure/api/ServiceAPI.ts

import { Service } from "../../domain/models/service";
import { ServiceRepository } from "../../domain/repositories/serviceRepository";
import config from "../config/config";

export class ServiceAPI implements ServiceRepository {
  private readonly endpoint = config.endpoint_services;

  async fetchServices(): Promise<Service[]> {
    const response = await fetch(this.endpoint);
    if (!response.ok) throw new Error("Failed to fetch services");
    return response.json();
  }
}
