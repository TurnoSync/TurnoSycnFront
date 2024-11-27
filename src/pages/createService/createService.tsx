import React from "react";
import config from "@infrastructure/config/config";
import { ServiceCreate } from "../../domain/models/serviceCreate";
import LayoutService from "@layout/customer/selectService/layoutService.tsx";

const Customer: React.FC = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Obtener los datos del formulario
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Convertir datos y asegurarnos de tiparlos correctamente
    const payload: ServiceCreate = {
      name: data.name as string,
      description: (data.description as string) || null,
      duration: Number(data.duration),
      price: Number(data.price),
      storeId: Number(data.storeId),
    };

    try {
      // Enviar los datos a la API
      const response = await fetch(config.create_services, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Error al enviar los datos");
      }

      const result = await response.json();
      console.log("Datos enviados correctamente:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <LayoutService title="TurnoSync | Create Service">
      <div>
        <form id="postForm" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" required />
          <input type="text" name="description" placeholder="Description" />
          <input
            type="number"
            name="duration"
            placeholder="Duration"
            required
          />
          <input type="number" name="price" placeholder="Price" required />
          <input type="number" name="storeId" placeholder="StoreId" required />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </LayoutService>
  );
};

export default Customer;
