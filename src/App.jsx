import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";

import Home from "./pages/Home";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import Tutor from "./pages/Tutor";
import Deanery from "./pages/Deanery";
import SocialActivity from "./pages/SocialActivity";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/tutor" element={<Tutor />} />
        <Route path="/deanery" element={<Deanery />} />
        <Route path="/social-activity" element={<SocialActivity />} />
      </Route>
    </Routes>
  );
}

export default App;