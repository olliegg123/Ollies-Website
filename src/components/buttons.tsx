import React, { useState } from "react";
import "../util/buttons_styles.css";


export const AllButtons = () => {
    const [show, setShow] = useState(true)
    return (
        <div onTouchStart="" className="flex-container">
        <a className="btn flex-item" target="_blank" href="http://olliegg.co.uk/games/cards.html"><span className="span2">Liver Let Die</span></a>
        <a className="btn flex-item" target="_blank" href="http://olliegg.co.uk/games/GoS2.html"><span className="span2">Game of Speeches</span></a>
        <a className="btn flex-item" target="_blank"href="https://apps.apple.com/gb/app/this-is-another-card-game/id1541317739"><span className="bigSpan">App Store Link<br /> This Is Another Card Game</span></a>
        </div>
    )
  }

