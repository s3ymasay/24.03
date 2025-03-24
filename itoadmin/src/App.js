import { Routes, Route } from "react-router-dom";

import FormCargo from "./FormCargo";
import FormCustomer from "./FormCustomer";
import FormOrder from "./FormOrder";
import FormProduct from "./FormProduct";
import ListOrder from "./ListOrder";
import ListCargo from "./ListCargo";
import ListProduct from "./ListProduct";
import ListCustomer from "./ListCustomer";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/ListCargo" element={<ListCargo />} />
        <Route path="/FormCargo" element={<FormCargo />} />
        <Route path="/ListCargo" element={<ListCargo />} />
        <Route path="/FormCustomer" element={<FormCustomer />} />
        <Route path="/FormOrder" element={<FormOrder />} />
        <Route path="/FormProduct" element={<FormProduct />} />
        <Route path="/ListOrder" element={<ListOrder />} />
        <Route path="/ListProduct" element={<ListProduct />} />
        <Route path="/ListCustomer" element={<ListCustomer />} />
      </Routes>
    </div>
  );
}
export default App;
