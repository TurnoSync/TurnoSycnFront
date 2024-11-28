import React, { useState } from "react";
import Service from "@components/customer/selectService/selectService.tsx";
import ServiceHub from "@components/customer/selectService/serviceHub.tsx";
import "@css/customer/selectService/serviceFather.css";

const ParentComponent: React.FC = () => {
  // State to store the selected services and their prices
  const [selectedServices, setSelectedServices] = useState<number[]>([]);
  const [selectedPrices, setSelectedPrices] = useState<number[]>([]);

  // Function to add a service to the selected state
  const handleServiceSelect = (serviceId: number, servicePrice: number) => {
    // Avoid duplicates in the service list
    if (!selectedServices.includes(serviceId)) {
      setSelectedServices((prev) => [...prev, serviceId]);
      setSelectedPrices((prev) => [...prev, servicePrice]);
    }
  };

  return (
    <div id="serviceFatherDiv">
      {/* Component to display and select services */}
      <Service onSelectService={handleServiceSelect} />
      {/* Component to display the selected services and total */}
      <ServiceHub
        selectedServices={selectedServices}
        selectedPrices={selectedPrices}
      />
    </div>
  );
};

export default ParentComponent;
