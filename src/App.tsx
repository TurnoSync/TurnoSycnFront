import "@css/general/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "@pages/general/home.jsx";
import Professional from "@pages/professional/professional.tsx";
import Customer from "@pages/customer/customer.tsx";
import SelectService from "@pages/selectService/selectService.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/professional"
            element={<Professional></Professional>}
          ></Route>
          <Route path="/customer" element={<Customer></Customer>}></Route>
          <Route
            path="/selectService"
            element={<SelectService></SelectService>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
