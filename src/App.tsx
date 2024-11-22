import "@css/general/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "@pages/general/home.jsx";
import Professional from "@pages/professional/professional.jsx";
import Customer from "@pages/customer/customer.jsx";
import NotFound from "@pages/general/notFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/professional" Component={Professional} />
          <Route path="/customer" Component={Customer} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
