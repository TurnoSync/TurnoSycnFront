import React from "react";
import Service from "@components/customer/selectService/serviceFather.tsx";
import LayoutService from "@layout/customer/selectService/layoutService.tsx";
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
      <LayoutService title="TurnoSync | Select Service">
        <h1 id="h1Title">Select Services</h1>
        <div id="fatherDiv">
          <Service />
        </div>
      </LayoutService>
    </div>
  );
};

export default Customer;
