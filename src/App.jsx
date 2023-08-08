import React from "react";
import Header from "./components/Header.jsx";
import CareerGoal from "./components/CareerGoal.jsx";
import WorkExperience from "./components/WorkExperience.jsx";
import Education from "./components/Education.jsx";
import PersonalProjects from "./components/PersonalProjects.jsx";
import Row from "./components/Row.jsx";
import Skills from "./components/Skills.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container mb-3">
        <Row>
          <CareerGoal />
        </Row>
        <Row>
          <WorkExperience />
        </Row>
        <Row>
          <Education />
          <PersonalProjects />
        </Row>
        <Row>
          <Skills />
        </Row>
      </main>
    </div>
  );
}

export default App;
