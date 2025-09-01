import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Groups from "./pages/Groups";
import Activities from "./pages/Activities";
import Faqs from "./pages/Faqs";
import ScrollToTop from "./components/ScrollToTop";
import AnimatedWrapper from "./components/AnimatedWrapper";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/dundalkpresbyterianchurch/"
          element={
            <AnimatedWrapper>
              <Home />
            </AnimatedWrapper>
          }
        />
        <Route
          path="/dundalkpresbyterianchurch/groups"
          element={
            <AnimatedWrapper>
              <Groups />
            </AnimatedWrapper>
          }
        />
        <Route
          path="/dundalkpresbyterianchurch/activities"
          element={
            <AnimatedWrapper>
              <Activities />
            </AnimatedWrapper>
          }
        />
        <Route
          path="/dundalkpresbyterianchurch/faqs"
          element={
            <AnimatedWrapper>
              <Faqs />
            </AnimatedWrapper>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
