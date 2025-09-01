import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Groups from "./pages/Groups";
import Activities from "./pages/Activities";
import Faqs from "./pages/Faqs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/groups" element={<Groups />} />
      <Route path="/activities" element={<Activities />} />
      <Route path="/faqs" element={<Faqs />} />
    </Routes>
  );
}

export default App;
