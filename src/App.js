import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/nav-kopi";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import "./App.scss";
import Hobbies from "./pages/Hobbies";
import Words from "./pages/Words";

function App() {
  return (
    <Router>
      <Navigation />

      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/hobby" element={<Hobbies />}></Route>
          <Route path="/words" element={<Words />}></Route>

          <Route path="*" element={<Notfound />}></Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
