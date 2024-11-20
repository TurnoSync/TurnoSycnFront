import React, { useState } from "react";
import Service from "@components/customer/selectService/selectService.tsx";
import ServiceHub from "@components/customer/selectService/serviceHub.tsx";

const ParentComponent: React.FC = () => {
  // Estado para almacenar los servicios seleccionados
  const [selectedServices, setSelectedServices] = useState<number[]>([]);

  // Función para agregar un servicio al estado de seleccionados
  const handleServiceSelect = (serviceId: number) => {
    if (!selectedServices.includes(serviceId)) {
      setSelectedServices((prev) => [...prev, serviceId]); // Evitar duplicados
    }
  };

  return (
    <div style={{ display: "flex", width: "100%" }}>
      {/* Componente para mostrar y seleccionar servicios */}
      <Service onSelectService={handleServiceSelect} />
      {/* Componente para mostrar los servicios seleccionados */}
      <ServiceHub selectedServices={selectedServices} />
    </div>
  );
};

export default ParentComponent;
