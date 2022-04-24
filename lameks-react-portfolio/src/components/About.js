import React from "react";
import hackerAvatar from "../assets/images/hackerAvatar.png";

function About() {
  return (
    <section id="about-link">
      <div>
        <div className="about-me-section">
          <div className="about-me-3d">
            <div id="about-me-title">About Me</div>
          </div>

          <div id="about-me-content">
            <h1 className="about-image">
              <img src={hackerAvatar} alt="Hacker Avatar" id="hacker-avatar" />
            </h1>

            <div>
              <p>
                Hello World! I love and enjoy the process and creativity that
                comes with building websites and apps. I am a graduate of The
                University of Sydney and Trilogy’s Full-Stack Coding Bootcamp.
              </p>
              <p>
                During this course, I have acquired all necessary skills to
                build a full-stack website with languages such as HTML, CSS,
                JavaScript, React and many more listed below. I have had
                experience in building a website from scratch with other fellow
                web developers, so I understand the process and mindset behind
                building something from the bottom up as a team.
              </p>
              <p>
                I have also built a full-stack web application alone so I can
                further understand the process of being independent and relying
                on myself to achieve and accomplish what is needed to be done.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
