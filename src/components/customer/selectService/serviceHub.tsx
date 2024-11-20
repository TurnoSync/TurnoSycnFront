import React from "react";
import "@css/customer/selectService/serviceHub.css";

const color = "colorless";

const value = false;

const stars = {
  starNumber: 4.8,
  stars: 4,
  number: 3169,
  location: "Bogota D.C., Kennedy, Timiza",
};

// Service component of type React.FC (Functional Component)
const ServiceHub: React.FC = () => {
  const circle = " ★";
  const contentFull = circle.repeat(stars.stars);
  const content = circle.repeat(5 - stars.stars);

  return (
    <div id="fatherServiceHub">
      <div id="shop">
        <img src="/favicon.svg" alt="" />
        <div id="shopName">
          <h3>Barbería Lords Sucursal Country Club</h3>
          <div id="fatherStars">
            <p>{stars.starNumber}</p>
            <span id="withColor">{contentFull}</span>{" "}
            <span id={color}>{content}</span>
            <p>({stars.number})</p>
          </div>
          <p>{stars.location}</p>
        </div>
      </div>
      <div id="serviceHub_Service">No hay servicios Seleccionados</div>
      <hr />
      <div id="value">
        <p>Total</p>
        {value ? <p id="divFather">helo</p> : <p>Gratis</p>}
      </div>
    </div>
  );
};

export default ServiceHub;
