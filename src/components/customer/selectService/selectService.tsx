// src/presentation/components/ServiceComponent.tsx

import React, { useEffect, useState } from "react";
import { Service } from "../../../domain/models/service";
import { FetchServices } from "@application/useCases/fetchServices";
import { ServiceAPI } from "@infrastructure/api/serviceAPI";
import "@css/customer/selectService/selectServiceComponent.css";

interface ServiceProps {
  onSelectService: (serviceId: string, servicePrice: number) => void; // Receives ID and Price
}

const ServiceComponent: React.FC<ServiceProps> = ({ onSelectService }) => {
  const [services, setServices] = useState<Service[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServicesUseCase = new FetchServices(new ServiceAPI());

    const fetchData = async () => {
      try {
        const data = await fetchServicesUseCase.execute();
        setServices(data);
      } catch (err) {
        setError("Failed to load services.");
        console.error(err);
      }
    };

    fetchData();
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <section id="selectService_section">
      {services ? (
        <div id="divFather">
          {services.map((service) => (
            <div key={service.id} className="service">
              <div className="divContent">
                <h3 className="name">{service.name}</h3>
                <p className="duration">{service.duration} Min</p>
                <p className="description">{service.description}</p>
                <p className="price">${service.price}</p>
              </div>
              <button
                className="plusButton"
                onClick={() => onSelectService(service.name, service.price)} // Send ID and price
              >
                <svg
                  className="plusIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                >
                  <g mask="url(#mask0_21_345)">
                    <path d="M13.75 23.75V16.25H6.25V13.75H13.75V6.25H16.25V13.75H23.75V16.25H16.25V23.75H13.75Z"></path>
                  </g>
                </svg>
                .
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default ServiceComponent;
