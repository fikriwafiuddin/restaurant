import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Orders from "./pages/Orders"
import Income from "./pages/Income"
import AddProduct from "./pages/AddProduct"
import Report from "./pages/Report"
import Staff from "./pages/Staff"
import Stock from "./pages/Stock"
import Notifications from "./pages/Notifications"
import Login from "./pages/Login"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/income" element={<Income />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/report" element={<Report />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/loginadmin" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
