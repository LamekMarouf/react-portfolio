import React from "react";
import bananaFinder from "../assets/images/bananaFinderScreenshot.jpg";
import ark from "../assets/images/arkScreenshot.jpg";
import weatherApp from "../assets/images/weatherApp.jpg";
import textEditor from "../assets/images/textEditor.png";
import teamProfileGenerator from "../assets/images/teamProfileGeneratorScreenshot.jpg";
import workDayScheduler from "../assets/images/workDayScheduler.jpg";

function Projects() {
  return (
    <>
      <section className="projects-container">
        <div id="projects-title">
          <div>My Projects</div>
        </div>

        <div className="projects-section">
          <div id="project-one" className="project-screenshots">
            <img src={ark} alt="ARK Screenshot" />
            <div className="project-popup">
              <div className="popup-text">
                <div className="project-text-title">ARK</div>
                This project's purpose is to allows users who need help to post
                their task and also view and accept tasks posted by other users.
                To understand this project further, please visit the repo and
                read the description. Fun Fact: The name ARK stands for Act of
                Random Kindness.
              </div>
              <div>
                <button className="popup-buttons">DEPLOYED</button>
                <a
                  href="https://github.com/jcarait/act-of-random-kindness"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="popup-buttons">REPO</button>
                </a>
              </div>
            </div>
          </div>

          <div id="project-two" className="project-screenshots">
            <img src={bananaFinder} alt="Banana Finder Screenshot" />
            <div className="project-popup">
              <div className="popup-text">
                <div className="project-text-title">Banana Finder</div>
                This project's purpose is to help users to identify the song and
                then adds value to the users experience by giving the more
                information about the artist and track. To understand this
                project further, please visit the repo and read the description.
              </div>
              <div>
                <button className="popup-buttons">DEPLOYED</button>
                <a
                  href="https://github.com/fubzee/banana-finder"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="popup-buttons">REPO</button>
                </a>
              </div>
            </div>
          </div>

          <div id="project-three" className="project-screenshots">
            <img src={textEditor} alt="Text Editor Screenshot" />
            <div className="project-popup">
              <div className="popup-text">
                <div className="project-text-title">J.A.T.E</div>
                This is just some test text. Hello, how are you? I am good
                thanks.
              </div>
              <div>
                <button className="popup-buttons">DEPLOYED</button>
                <a
                  href="https://github.com/LamekMarouf/text-editor"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="popup-buttons">REPO</button>
                </a>
              </div>
            </div>
          </div>

          <div id="project-four" className="project-screenshots">
            <img
              src={teamProfileGenerator}
              alt="Team Profile Generator Screenshot"
            />
            <div className="project-popup">
              <div className="popup-text">
                <div className="project-text-title">Team Profile Generator</div>
                <div className="project-text-description">
                  This project's purpose is to create a team of managers,
                  engineers and interns. It is created by using the NodeJS. This
                  does not include a deployed app as it is ran within the
                  integrated terminal. To understand this project further,
                  please visit the repo and read the description.
                </div>
              </div>
              <div>
                <button className="popup-buttons">DEPLOYED</button>
                <a
                  href="https://github.com/LamekMarouf/team-profile-generator"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="popup-buttons">REPO</button>
                </a>
              </div>
            </div>
          </div>

          <div id="project-five" className="project-screenshots">
            <img src={weatherApp} alt="Weather Dashboard Screenshot" />
            <div className="project-popup">
              <div className="popup-text">
                <div className="project-text-title">Weather Dashboard</div>
                This project's purpose is to display the current weather for a
                city you want to know. To understand this project further,
                please visit the repo and read the description.
              </div>
              <div>
                <button className="popup-buttons">DEPLOYED</button>
                <a
                  href="https://github.com/LamekMarouf/weather-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="popup-buttons">REPO</button>
                </a>
              </div>
            </div>
          </div>

          <div id="project-six" className="project-screenshots">
            <img src={workDayScheduler} alt="Work Day Scheduler Screenshot" />
            <div className="project-popup">
              <div className="popup-text">
                <div className="project-text-title">Work Day Scheduler</div>
                This project's purpose is for users to be able to record and set
                timestamps for certain hours of the workday. To understand this
                project further, please visit the repo and read the description.
              </div>
              <div>
                <button className="popup-buttons">DEPLOYED</button>
                <a
                  href="https://github.com/LamekMarouf/work-day-scheduler"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="popup-buttons">REPO</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
