import "@css/general/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importa los componentes de las páginas principales
import Home from "@pages/general/home.jsx";
import Professional from "@pages/professional/professional.jsx";
import Customer from "@pages/customer/customer.jsx";

// Importa los componentes de cada paso del flujo de registro para el profesional
import StepOne from "@pages/professional/reggister/StepOne/StepOne";
import StepTwo from "@pages/professional/reggister/StepTwo/StepTwo";
import StepThree from "@pages/professional/reggister/StepThree/StepThree";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/professional" element={<Professional />} />
          <Route path="/customer" element={<Customer />} />

          {/* Rutas para el flujo de registro de profesional */}
          <Route path="/professional/register" element={<StepOne />} />
          <Route path="/professional/register/step-two" element={<StepTwo />} />
          <Route path="/professional/register/step-three" element={<StepThree />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;