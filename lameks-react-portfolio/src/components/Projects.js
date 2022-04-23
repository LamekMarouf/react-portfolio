import React from "react";
import testLogo from "../assets/images/white-background.jpg"

function Projects() {
    return (
        <>
        <section className="projects-container">

            <div id="projects-title">
                <div>My Projects</div>
            </div>

            <div className="projects-section">
                <div className="project-line-one">
                    <div id="project-one">
                        <img src={testLogo} alt="test"/>
                    </div>
                    <div id="project-two">
                        <img src={testLogo} alt="test"/>
                    </div>    
                </div>

                <div className="project-line-two">
                    <div id="project-three">
                        <img src={testLogo} alt="test"/>
                    </div>
                    <div id="project-four">
                        <img src={testLogo} alt="test"/>
                    </div>    
                </div>

                <div className="project-line-three">
                    <div id="project-five">
                        <img src={testLogo} alt="test"/>
                    </div>
                    <div id="project-six">
                        <img src={testLogo} alt="test"/>
                    </div>    
                </div>
        
            </div>

        </section>
        </>
    )
}

export default Projects;