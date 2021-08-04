import React, { useState } from "react"
import { RoughNotation, RoughNotationGroup } from "react-rough-notation"
import Typewriter from "typewriter-effect";
import "../util/styles.css";
import "@fontsource/georama";

export const Text = () => {
  const [show, setShow] = useState(true)
  return (
    <div>
        <Typewriter
            
            onInit={(typewriter)=> {

            typewriter
            
            .typeString('<span style = "background-color: #81c1cb; color: #3d3a39; font-family: Georama; font-size: 50px;">Hello, my name is</span>')
                
            .pauseFor(500)
            .typeString('<br /><br /><span style = "background-color: #81c1cb; color: #3d3a39; font-family: Georama; font-size: 50px;"><strong>Ollie Gerrard.</strong></span>')
            .start();
            }}
            />
        <br />
    </div>
  )
}
