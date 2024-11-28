import React from "react";
import Service from "@components/customer/selectService/serviceFather.tsx";
import LayoutSelectService from "@layout/customer/selectService/layoutSelectService.tsx";
import "../../css/customer/selectService/selectService.css";

import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";

const Customer: React.FC = () => {
  return (
    <div id="selectServiceFather">
      <LayoutSelectService title="TurnoSync | Select Service">
        <h1 id="h1Title">Select Services</h1>
        <div id="fatherDiv">
          <Service />
        </div>
      </LayoutSelectService>
    </div>
  );
};

export default Customer;
