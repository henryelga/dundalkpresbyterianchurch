import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Groups from "./pages/Groups";
import Activities from "./pages/Activities";
import Faqs from "./pages/Faqs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dundalkpresbyterianchurch" element={<Home />} />
        <Route path="/dundalkpresbyterianchurch/groups" element={<Groups />} />
        <Route
          path="/dundalkpresbyterianchurch/activities"
          element={<Activities />}
        />
        <Route path="/dundalkpresbyterianchurch/faqs" element={<Faqs />} />
      </Routes>
    </Router>
  );
}

export default App;
