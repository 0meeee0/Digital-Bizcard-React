import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import AddCard from "../pages/AddCard";
import UpdateCard from "../pages/UpdateCard";
function MyRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/AddCard" element={<AddCard />} />
      <Route path="/UpdateCard/:id" element={<UpdateCard />} />
    </Routes>
  );
}

export default MyRouter;
