import "@css/general/App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "@pages/general/home.jsx";
import Professional from "@pages/professional/professional.jsx";
import Customer from "@pages/customer/customer.jsx";
import SelectService from "@pages/selectService/selectService.tsx";
import createService from "@pages/createService/createService.tsx";
import NotFound from "@pages/general/notFound";

function App() {
  return (
    <>
      <BrowserRouter
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true,
        }}
      >
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/professional" Component={Professional} />
          <Route path="/customer" Component={Customer} />
          <Route path="/selectService" Component={SelectService} />
          <Route path="/createService" Component={createService} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
