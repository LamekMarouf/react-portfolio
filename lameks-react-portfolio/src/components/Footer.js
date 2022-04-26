import React from "react";
import resume from "../assets/extras/codingResume.pdf"

function Footer() {
  return (
    <>
      <section className="footer-container">
        <div>
          <a
            href="https://github.com/LamekMarouf"
            target="_blank"
            rel="noreferrer"
            className="github"
          >
            GITHUB
          </a>
        </div>

        <div>
          <a
            href="https://www.linkedin.com/in/lamek-marouf/"
            target="_blank"
            rel="noreferrer"
            className="linkedin"
          >
            LINKEDIN
          </a>
        </div>

        <div>
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            className="resume"
          >
            RESUME
          </a>
        </div>
      </section>
    </>
  );
}

export default Footer;
