import React from "react";
import LayoutService from "@layout/customer/selectService/layoutService.tsx";
import CreateServices from "@components/customer/createService/CreateService";

const Customer: React.FC = () => {
  return (
    <LayoutService title="TurnoSync | Create Service">
      <CreateServices />
    </LayoutService>
  );
};

export default Customer;
