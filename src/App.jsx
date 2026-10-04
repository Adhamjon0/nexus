import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Layout from "./components/layout/Layout";
import Intro from "./components/intro/Intro";
import ScrollToTop from "./components/layout/ScrollToTop";

import Home from "./pages/Home";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import Tutor from "./pages/Tutor";
import Deanery from "./pages/Deanery";
import SocialActivity from "./pages/SocialActivity";
import StudentLogin from "./pages/StudentLogin";
import PrivateStudents from "./pages/PrivateStudents";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {showIntro && (
          <Intro
            onFinish={() => {
              setShowIntro(false);
            }}
          />
        )}
      </AnimatePresence>

      <ScrollToTop />

      <Routes>

        <Route element={<Layout />}>
          <Route
            path="/home"
            element={<Home />}
          />

          <Route
            path="/students"
            element={<Students />}
          />

          <Route
            path="/teachers"
            element={<Teachers />}
          />

          <Route
            path="/tutor"
            element={<Tutor />}
          />

          <Route
            path="/deanery"
            element={<Deanery />}
          />

          <Route
            path="/social-activity"
            element={<SocialActivity />}
          />

          {/* Asosiy sahifa */}
          <Route
            path="*"
            element={<Home />}
          />
        </Route>
        <Route
          path="/student-login"
          element={<StudentLogin />}
        />
        <Route
          path="/private-students"
          element={<PrivateStudents />}
        />
      </Routes>
    </>
  );
}

export default App;