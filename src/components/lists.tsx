import React, { useState } from "react"
import { RoughNotation, RoughNotationGroup } from "react-rough-notation"
import Typewriter from "typewriter-effect";
import "../util/styles.css";
import "../util/list_styles.css";
import "@fontsource/georama";
import "@fontsource/ubuntu"; 

const delay = 44000;
export const AllLists = () => {
  const [show, setShow] = useState(true)
  return (
    <RoughNotationGroup>
    <RoughNotation animationDelay={delay} order="1" type="box" show="true" strokeWidth="2" iterations="3">
        <div className="flex-container center">
    
    <li className="flex-item">
    <RoughNotation animationDelay={delay} order="2" type="underline" show="true" strokeWidth="1">
        <strong>Top 5 Burgers.</strong>
    </RoughNotation>
        <ol>
           <li>Hamburgueria do Largo<br /><a href="https://www.facebook.com/hamburgueriadolargofz/">Fuseta, Portugal 🇵🇹</a></li><p></p>
           <li>HOG2<br /><a href="https://www.facebook.com/HOG2PowstancowWielkopolskich/">Krakow, Poland 🇵🇱</a></li><p></p>
           <li>Smokey Burger<br /><a href="https://www.facebook.com/Smokeys-Burgers-Shakes-2261663100594478/">Southampton, UK 🇬🇧</a></li><p></p>
           <li>Burgermeister<br /><a href="https://burger-meister.de/">Berlin, Germany 🇩🇪</a></li><p></p>
           <li>Barrels<br /><a href="https://barrels.se/en/home/">Stockholm, Sweden 🇸🇪</a></li>
         </ol>
    </li>
    <li className="flex-item">
    <RoughNotation animationDelay={delay} order="3" type="underline" show="true" strokeWidth="1">
    <strong>Top 5 Beers.</strong>
    </RoughNotation>
        <ol>
           <li>Life & Death <br /><a href="https://www.vocationbrewery.com/products/life-death">Vocation - Hebden Bridge</a></li><p></p>
           <li>Dark Matter<br /><a href="https://untappd.com/b/atom-dark-matter/815296">Atom - Hull</a></li><p></p>
           <li>Dr. Harris<br /><a href="https://stodfoldbrewing.com/product/stod-fold-dr-harris">Stod Fold - Halifax</a></li><p></p>
           <li>Imperial Tonkoko<br /><a href="https://brewyork.co.uk/product/imperial-tonkoko/">Brew York - York</a></li><p></p>
           <li>Shepherds Warning<br /><a href="https://wildweatherales.com/product/440ml-shepherds-warning/">Wild Weather Ales - Reading</a></li>
         </ol>
    </li>
    <li className="flex-item">
    <RoughNotation animationDelay={delay} order="4" type="underline" show="true" strokeWidth="1">
    <strong>
        Next 5 Trips.</strong>
    </RoughNotation>
        <ol>
           <li>Hornsea <br />End of August.</li><p></p>
           <li>European Mini-Interrailing<br />Middle of September</li><p></p>
           <li>Florida & Southern US<br />October.</li><p></p>
           <li>LA & Mexican Riviera<br />December</li><p></p>
           <li>Bucharest<br />February.</li><p></p>
         </ol>
    </li>
        <br />
    </div>
    </RoughNotation>
    </RoughNotationGroup>
  )
}