import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Homepage/Navbar.jsx";
import Landingpage from "./pages/Landingpage.jsx";
import Footter from "./components/Homepage/Footter.jsx";
import Productdetails from "./pages/Productdetails.jsx";
import Shoppincart from "./pages/Shoppincart.jsx";
import Checkout from "./pages/Checkout.jsx/";
import Products from "./pages/Products.jsx";
import Message from "./pages/Message.jsx";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Products />}></Route>

          <Route path="/shopping-cart" element={<Shoppincart />}></Route>
          <Route path="/form-details" element={<Checkout />}></Route>
          <Route path="/thank-you" element={<Message />}></Route>

          <Route path="#" element={<Products />}></Route>
          <Route path="#" element={<Landingpage />}></Route>
          <Route path="#" element={<Productdetails />}></Route>
        </Routes>
        <Footter />
      </BrowserRouter>
    </div>
  );
}

export default App;
