import React, { useState, useEffect } from "react";
import "@css/customer/selectService/selectServiceComponent.css";

// Define the interface for the service type
interface Service {
  id: number;
  name: string;
  description: string | null;
  duration: number;
  price: number;
  storeId: number;
}

// Service component of type React.FC (Functional Component)
const Service: React.FC = () => {
  // Use useState to store the fetched services, and type the state with Service[] or null
  const [data, setData] = useState<Service[] | null>(null);

  // Use useEffect to fetch services from an API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/services");
        if (!response.ok) {
          throw new Error("Failed to fetch services");
        }
        const data: Service[] = await response.json();
        setData(data); // Set the fetched data into the state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the function to fetch the services
  }, []); // The effect runs only once when the component mounts

  // Function to handle a service button click
  const handleClick = (serviceId: number): void => {
    console.log(`Button clicked for service with ID: ${serviceId}`);
  };

  return (
    <div>
      {/* If data is available, display it; otherwise, show a loading message */}
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
                onClick={() => handleClick(service.id)} // Trigger handleClick with the service ID
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
    </div>
  );
};

export default Service;
