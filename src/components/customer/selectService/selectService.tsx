import React, { useState, useEffect } from "react";
import "@css/customer/selectService/selectServiceComponent.css";

interface ServiceProps {
  onSelectService: (serviceId: number) => void;
}

interface Service {
  id: number;
  name: string;
  description: string | null;
  duration: number;
  price: number;
  storeId: number;
}

const Service: React.FC<ServiceProps> = ({ onSelectService }) => {
  const [data, setData] = useState<Service[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/services");
        if (!response.ok) throw new Error("Failed to fetch services");
        const data: Service[] = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      {data ? (
        <div id="divFather">
          {data.map((service) => (
            <div key={service.id} className="service">
              <div className="divContent">
                <h3 className="name">{service.name}</h3>
                <p className="duration">{service.duration} Min</p>
                <p className="description">{service.description}</p>
                <p className="price">${service.price}</p>
              </div>
              <button
                className="plusButton"
                onClick={() => onSelectService(service.id)} // Llamar la función de prop
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

export default Service;
