import React from "react";
import GithubLogo from "../assets/GitHub-Mark-32px.png";
import LinkedinLogo from "../assets/Linkedin-Mark-32px.png";
import GmailLogo from "../assets/Gmail-Mark-32px.png";

const Footer = () => {
  return (
    <footer className="footer text-center  col-12">
      <div className="d-flex justify-content-center ">
        <span>
          <a href="https://www.linkedin.com/in/bryanwindsor/">
            <img className="p-2" src={LinkedinLogo} alt="Linkedin Profile" />
          </a>
        </span>
        <span>
          <a href="https://github.com/taidaid">
            <img className="p-2" src={GithubLogo} alt="Github Profile" />
          </a>
        </span>
        <span>
          <a href="mailto:windsor.bryan@gmail.com?subject=Developer Opportunity">
            <img className="p-2" src={GmailLogo} alt="Gmail" />
          </a>
        </span>
        <span className="p-2 text-muted">Bryan Windsor &copy; 2019</span>
      </div>
    </footer>
  );
};

export default Footer;
