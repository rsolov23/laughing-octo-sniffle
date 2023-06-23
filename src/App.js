import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Toggle from "./pages/Toggle";
import DarkMode from "./pages/Darkmode";
import NavBar from "./components/NavBar";
import Header from "./pages/Header";
import Example from "./pages/Example";
import Fetch from "./pages/Fetch";
import Lifecycle from "./pages/Lifecycle";

function App() {
  return (
    <>
      <BrowserRouter> {/* Router component to enable routing */}
        <NavBar /> {/* Render the navigation bar */}
        <Routes> {/* Component to define the routes */}
          <Route path="/" element={<Header />} /> {/* Route for the home page */}
          <Route path="/toggle" element={<Toggle />} /> {/* Route for the Toggle page */}
          <Route path="/darkmode" element={<DarkMode />} /> {/* Route for the DarkMode page */}
          <Route path="/example" element={<Example />} /> {/* Route for the Example page */}
          <Route path="/fetch" element={<Fetch />} /> {/* Route for the Fetch page */}
          <Route path="/lifecycle" element={<Lifecycle />} /> {/* Route for the Lifecycle page */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
