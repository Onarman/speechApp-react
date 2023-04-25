// import React from "react";
import {AiFillRobot,AiOutlineRobot} from "react-icons/ai"

const SpeechNarrator = () => {
  return <div className="container d-flex flex-column my-3 gap-30">
    <h1>Speech Narrator</h1>
    <div className="icons">
    <AiOutlineRobot className="blue"/>
    <AiFillRobot />
    
    </div>
    {/* <HighlightedText /> */}
    <form action="">
        <label> Rate:</label>
        <input type="range" min=".5" max="2" step=".1" value={""}/>
    </form>
    
  </div>;
};

export default SpeechNarrator;
