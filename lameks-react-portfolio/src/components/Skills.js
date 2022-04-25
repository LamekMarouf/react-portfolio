import React from "react";
import htmlLogo from "../assets/images/htmlLogo.png"
import cssLogo from "../assets/images/cssLogo.png"
import javascriptLogo from "../assets/images/javascriptLogo.png"
import mysqlLogo from "../assets/images/mysqlLogo.png"
import nodejsLogo from "../assets/images/nodejsLogo.png"
import reactLogo from "../assets/images/reactLogo.png"
import graphqlLogo from "../assets/images/graphqlLogo.png"
import mongodbLogo from "../assets/images/mongodbLogo.png"
import bootstrapLogo from "../assets/images/bootstrapLogo.png"

function Skills() {
  return (
    <>
      <section className="skills-container">
        <div className="skills-half">
          <div id="skills-title">
            <div>My Skills</div>
          </div>
          <div id="skills-description">
            <p>
              These are all the skills and languages I have learnt, processed
              and created projects using. These include:
            </p>
            <ul className="skills-list-container">
              <div className="skills-list-left">
                <li>React</li>
                <li>JavaScript</li>
                <li>GraphQL</li>
                <li>Node.js</li>
                <li>MongoDB</li>
              </div>

              <div className="skills-list-right">
                <li>Express.js</li>
                <li>MySql</li>
                <li>Bootstrap</li>
                <li>CSS</li>
                <li>HTML</li>
              </div>
            </ul>
            <p>
              To know further about my understanding for each language, please
              take a look at my resume and projects.
            </p>
          </div>
        </div>

        <div className="logos-half">
          <div className="logos-container" id="skill1">
          <img src={reactLogo} alt="React Logo" id="react-logo" className="skill-logos"/>
          </div>

          <div className="logos-container" id="skill2">
          <img src={graphqlLogo} alt="GraphQl Logo" id="graphql-logo" className="skill-logos"/>
          </div>

          <div className="logos-container" id="skill3">
          <img src={mongodbLogo} alt="MongoDb Logo" id="mongodb-logo" className="skill-logos"/>
          </div>

          <div className="logos-container" id="skill4">
          <img src={bootstrapLogo} alt="Bootstrap Logo" id="bootstrap-logo" className="skill-logos"/>
          </div>

          <div className="logos-container" id="skill5">
          <img src={nodejsLogo} alt="Noded.js Logo" id="nodejs-logo" className="skill-logos"/>
          </div>

          <div className="logos-container" id="skill6" >
          <img src={mysqlLogo} alt="MySql Logo" id="mysql-logo" className="skill-logos"/>
          </div>

          <div className="logos-container" id="skill7">
          <img src={javascriptLogo} alt="JavaScript Logo" id="javascript-logo" className="skill-logos"/>
          </div>

          <div className="logos-container" id="skill8">
          <img src={cssLogo} alt="CSS Logo" id="css-logo" className="skill-logos"/>
          </div>

          <div className="logos-container" id="skill9">
            <img src={htmlLogo} alt="HTML Logo" id="html-logo" className="skill-logos"/>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
