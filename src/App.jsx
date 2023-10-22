import React, { useContext } from "react";
import Header from "./components/Header.jsx";
import CareerGoal from "./components/CareerGoal.jsx";
import WorkExperience from "./components/WorkExperience.jsx";
import Education from "./components/Education.jsx";
import PersonalProjects from "./components/PersonalProjects.jsx";
import Row from "./components/Row.jsx";
import Skills from "./components/Skills.jsx";
import ThemeContext from "./components/ThemeContext.jsx";

function App() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={isDarkMode ? "App-dm" : "App"}>
      <Header />
      <main className="container mb-2">
        <Row>
          <CareerGoal />
        </Row>
        <Row>
          <WorkExperience />
        </Row>
        <Row>
          <PersonalProjects />
          <Education />
        </Row>
        <Row>
          <Skills />
        </Row>
      </main>
      <div
        className={
          isDarkMode ? "col colored-section-dm" : "col colored-section"
        }
      ></div>
    </div>
  );
}

export default App;
