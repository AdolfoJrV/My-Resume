import React from "react";
import Header from "./components/Header.jsx";
import WorkExperience from "./components/WorkExperience.jsx";
import Education from "./components/Education.jsx";
import TechnologySummary from "./components/TechnologySummary.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container">
        <div className="row mt-3">
          <WorkExperience />
          <Education />
        </div>
        <div className="row mt-3">
          <TechnologySummary />
        </div>
      </main>
    </div>
  );
}

export default App;
