import React from "react";
import config from "@infrastructure/config/config";
import {
  ServiceCreate,
  ServiceCreateData,
} from "../../../domain/models/serviceCreate";
import "@css/customer/createService/createService.css";
import DATA from "@dummyData/dummyCreateServiceData.json";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateServices: React.FC = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Retrieve form data
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Convert data and ensure proper typing
    const payload: ServiceCreate = {
      name: data.name as string,
      description: (data.description as string) || null,
      duration: Number(data.duration),
      price: Number(data.price),
      storeId: Number(data.storeId),
    };

    try {
      // Send data to the API
      const response = await fetch(config.create_services, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Error sending data");
      }

      const result = await response.json();
      toast.success("Data sent successfully!");
      console.log("Data sent successfully:", result);
    } catch (error) {
      toast.error("Failed to send data. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div id="fatherCreateService_div">
      <ToastContainer />
      <h1>Fill in the fields to create a new service</h1>
      <form id="postForm" onSubmit={handleSubmit}>
        {DATA.map((item: ServiceCreateData) => {
          return (
            <div className="form__group field" key={item.name}>
              <input
                type={item.type}
                className="form__field"
                placeholder={
                  item.name.charAt(0).toUpperCase() + item.name.slice(1)
                }
                name={item.name}
                required
              />
              <label htmlFor={item.name} className="form__label">
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </label>
            </div>
          );
        })}
        <button type="submit" id="buttonSent_createService">
          <div className="svg-wrapper-1">
            <div className="svg-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                ></path>
              </svg>
            </div>
          </div>
          <span>Send</span>
        </button>
      </form>
    </div>
  );
};

export default CreateServices;
