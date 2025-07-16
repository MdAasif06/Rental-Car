import { useState } from "react";
import Navbar from "./components/Navbar";
import { useLocation, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Car from './pages/Car'
import CarDetails from "./pages/CarDetails"
import MyBooking from './pages/MyBooking'

const App = () => {
  const [showlogin, setShowLogin] = useState(false);
  const isOwnerPath = useLocation().pathname.startsWith("/owner");
  return (
    <>
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin} />}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cars" element={<Car/>}/>
        <Route path="/car-details/:id" element={<CarDetails/>}/>
        <Route path="/my-booking" element={<MyBooking/>}/>
      </Routes>
    </>
  );
};

export default App;
