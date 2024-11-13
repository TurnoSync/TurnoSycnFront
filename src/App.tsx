import "@css/general/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "@pages/general/home.jsx";
import Professional from "@pages/professional/professional.jsx";
import Customer from "@pages/customer/customer.jsx";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
