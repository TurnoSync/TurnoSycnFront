import React from "react";
import "@css/customer/selectService/serviceHub.css";

const color = "colorless";

interface ServiceHubProps {
  selectedServices: number[];
}

const stars = {
  name: "Barbería Lords Sucursal Country Club",
  starNumber: 4.8,
  stars: 4,
  number: 3169,
  location: "Bogota D.C., Kennedy, Timiza",
};

// Service component of type React.FC (Functional Component)
const ServiceHub: React.FC<ServiceHubProps> = ({ selectedServices }) => {
  const circle = " ★";
  const contentFull = circle.repeat(stars.stars);
  const content = circle.repeat(5 - stars.stars);

  return (
    <div id="fatherServiceHub">
      <div id="shop">
        <img src="/favicon.svg" alt="" />
        <div id="shopName">
          <h3>{stars.name}</h3>
          <div id="fatherStars">
            <p>{stars.starNumber}</p>
            <span id="withColor">{contentFull}</span>{" "}
            <span id={color}>{content}</span>
            <p>({stars.number})</p>
          </div>
          <p>{stars.location}</p>
        </div>
      </div>
      <div id="serviceHub_Service">
        {selectedServices.length > 0 ? (
          <ul>
            {selectedServices.map((id, name) => (
              <li key={id}>
                Servicio ID: {id} {name}
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay servicios Seleccionados</p>
        )}
      </div>
      <hr />
      <div id="value">
        <p>Total</p>
        <p>{selectedServices.length > 0 ? "Calculando precio..." : "Gratis"}</p>
      </div>
    </div>
  );
};

export default ServiceHub;
