import {  Routes, Route } from "react-router";
import { HomePage } from "./pages/Home/Home";
import { Unblock } from "./pages/Unblock/Unblock";

function App() {

  return (
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/unblock" element={<Unblock/>} />
      </Routes>
  )
}

export default App
