import React from "react";
import codingAvatar from "../assets/images/codingAvatar.png";

function Homepage() {
  return (
    <section className="outer-border">
      <section className="introduction-half">
        <div className="intro-paragraph">
          <div className="intro">HELLO,</div>
          <div className="intro">MY NAME IS</div>
          <div className="intro" id="name">
            LAMEK MAROUF
          </div>
          <div id="interests-paragraph">
            I love and enjoy the process and creativity that comes with building
            websites and apps.
          </div>
        </div>
      </section>

      <section className="homepage-image">
        <img src={codingAvatar} alt="Coding Avatar" id="coding-avatar" />
      </section>
    </section>
  );
}

export default Homepage;
