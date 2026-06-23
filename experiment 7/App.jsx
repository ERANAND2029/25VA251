import React from "react";
import Student from "./Student";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Student Information System</h1>

      <Student
        name="Anand Rai"
        course="AIML"
        marks="92"
      />

      <Student
        name="Rahul Kumar"
        course="CSE"
        marks="88"
      />

      <Student
        name="Priya Sharma"
        course="IT"
        marks="95"
      />
    </div>
  );
}

export default App;