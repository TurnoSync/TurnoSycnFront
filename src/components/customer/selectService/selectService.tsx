import React from "react";
import { useState, useEffect } from "react";
import "@css/customer/selectService/selectServiceComponent.css";

interface Service {
  id: number;
  name: string;
  description: string | null;
  duration: number;
  price: number;
  storeId: number;
}

const Service: React.FC = () => {
  const [data, setData] = useState<Service[] | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/services")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      {data ? (
        <div id="divFather">
          {data.map((user, index) => (
            <div key={index} className="service">
              <div className="divContent">
                <h3 className="name">{user.name}</h3>
                <p className="duration">{user.duration} Min</p>
                <p className="description">{user.description}</p>
                <p className="price">${user.price}</p>
              </div>
              <div className="plusButton">
                <svg
                  className="plusIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                >
                  <g mask="url(#mask0_21_345)">
                    <path d="M13.75 23.75V16.25H6.25V13.75H13.75V6.25H16.25V13.75H23.75V16.25H16.25V23.75H13.75Z"></path>
                  </g>
                </svg>
              </div>
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
