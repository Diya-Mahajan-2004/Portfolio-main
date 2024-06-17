import React from "react";
import Home from "./Pages/Home";
import NavigateCaseStudy from "./CaseStudies/NavigateCaseStudy";
import AyuvCaseStudy from './CaseStudies/AyuvCaseStudy';
import ChatBotCaseStudy from "./CaseStudies/ChatBotCaseStudy"
import GuardianGigCaseStudy from "./CaseStudies/GuardianGigCaseStudy";
import ResumeCaseStudy from "./CaseStudies/ResumeCaseStudy";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WeatherAppCaseStudy from "./CaseStudies/WeatherAppCaseStudy";

function App() {
  return (
    <Router>
           {" "}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/case-study/navigate" element={<NavigateCaseStudy />} />
        <Route path="/case-study/chatbot" element={<ChatBotCaseStudy />} />
        <Route path="/case-study/ayuv" element={<AyuvCaseStudy/>} />
        <Route path="/case-study/guardiangig" element={<GuardianGigCaseStudy/>} />
        <Route path="/case-study/weatherapp" element={<WeatherAppCaseStudy/>} />
        <Route path="/case-study/resume" element={<ResumeCaseStudy/>} />




        
      </Routes>
         {" "}
    </Router>
  );
}

export default App;
