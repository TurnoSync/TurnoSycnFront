import React from "react";
import "@css/customer/selectService/serviceHub.css";

interface ServiceHubProps {
  selectedServices: number[]; // Array of selected service name
  selectedPrices: number[]; // Array of selected service prices
}

const ServiceHub: React.FC<ServiceHubProps> = ({
  selectedServices,
  selectedPrices,
}) => {
  // Static data for the barbershop (you can adjust it as needed)
  const stars = {
    name: "Barbería Lords Sucursal Country Club",
    starNumber: 4.8,
    stars: 4,
    number: 3169,
    location: "Bogota D.C., Kennedy, Timiza",
  };

  const totalSum = selectedPrices
    // @ts-expect-error: There is no other way to add the numbers without conflict.
    .map((value) => parseFloat(value))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return (
    <div id="fatherServiceHub">
      <div id="shop">
        <img src="/favicon.svg" alt="" />
        <div id="shopName">
          <h3>{stars.name}</h3>
          <div id="fatherStars">
            <p>{stars.starNumber}</p>
            <span id="withColor">{"★".repeat(stars.stars)}</span>
            <p>({stars.number})</p>
          </div>
          <p>{stars.location}</p>
        </div>
      </div>
      <div id="serviceHub_Service">
        {selectedServices.length > 0 ? (
          <section>
            {selectedServices.map((id, index) => (
              <div key={id} className="servicesHub_select">
                <p>{id}</p> <span> - </span>
                <p className="servicesHub_price">
                  {" "}
                  Precio: <span>${selectedPrices[index]}</span>
                </p>
              </div>
            ))}
          </section>
        ) : (
          <p>No hay servicios seleccionados</p>
        )}
      </div>
      <hr />
      <div id="value">
        <p>Total</p>
        <p>{selectedPrices.length > 0 ? `$${totalSum}` : "Gratis"}</p>
      </div>
    </div>
  );
};

export default ServiceHub;
