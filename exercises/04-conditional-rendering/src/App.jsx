import React from "react";
import "./App.css";
import AccordionSection from "./components/AccordionSection";
import {content}from "./content/accordion";

function App() {
  return (
  <div className="ui styled accordion">
    {content.map((accordionContent)=>{
      return(
  <AccordionSection
  title={accordionContent.title}
  content={accordionContent.content}
  isOpen={accordionContent.isOpen}
  />
      );
    })}  
  </div>
  );
}

export default App;
