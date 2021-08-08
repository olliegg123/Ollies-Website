import React, { useState } from "react"
import { RoughNotation, RoughNotationGroup } from "react-rough-notation"
import Typewriter from "typewriter-effect";
import "../util/styles.css";
import "../util/buttons_styles.css";
import "@fontsource/georama";
import "@fontsource/ubuntu"; 

export const Intro = () => {
  const [show, setShow] = useState(true)
  return (
    <div>
        <Typewriter
            
            onInit={(typewriter)=> {

            typewriter
            
            .typeString('<span style = "background-color: #81c1cb; color: #3d3a39; font-family: Georama; font-size: 50px;">Hey! My name is</span>')
            .pauseFor(300)
            .typeString('<br /><br /><span style = "background-color: #81c1cb; color: #3d3a39; font-family: Georama; font-size: 50px;"><strong>Ollie Gerrard.</strong></span>')
            .pauseFor(500)
            .typeString('<br /><br /><span style = "background-color: #81c1cb; color: #3d3a39; font-family: Georama; font-size: 50px;">I\'m from <strong><a href="www.google.com">Halifax, West Yorkshire.</strong></a></span>')
            .pauseFor(750)
            .changeDeleteSpeed(30)
            .deleteChars(30)
            .typeString('<span style = "background-color: #81c1cb; color: #3d3a39; font-family: Georama; font-size: 50px;">a Software Engineer for <strong>Cisco.</strong></span>')
            .pauseFor(750)
            .deleteChars(34)
            .typeString('<span style = "background-color: #81c1cb; color: #3d3a39; font-family: Georama; font-size: 50px;">My interests include </span>')
            .pauseFor(10)
            .typeString('<span style = "font-family: Georama; font-size: 50px;"> </span>')
            .pauseFor(10)
            .typeString('<span style = "background-color: #f9a4cb; color: #3d3a39; font-family: Georama; font-size: 50px;"><strong>Beers.</strong></span>')
            .pauseFor(200)
            .deleteChars(6)
            .typeString('<span style = "background-color: #f9a4cb; color: #3d3a39; font-family: Georama; font-size: 50px;"><strong>Burgers.</strong></span>')
            .pauseFor(200)
            .deleteChars(8)
            .typeString('<span style = "background-color: #f9a4cb; color: #3d3a39; font-family: Georama; font-size: 50px;"><strong>Being Abroad.</strong></span>')
            .pauseFor(300)
            .deleteChars(39)
            .typeString('<br /><br /><span style = "background-color: #f9a4cb; color: #3d3a39; font-family: Georama; font-size: 50px;">Scroll down to learn more.</span>')
            .start();
            }}
            />
        <br />
    </div>
  )
}
