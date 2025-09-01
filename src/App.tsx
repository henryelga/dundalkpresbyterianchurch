import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Groups from "./pages/Groups";
import Activities from "./pages/Activities";
import Faqs from "./pages/Faqs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/faqs" element={<Faqs />} />
      </Routes>
    </Router>
  );
}

export default App;
