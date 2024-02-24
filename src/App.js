import { Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Products from "./Component/Products";
import Cart from "./Component/Cart";
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App; 