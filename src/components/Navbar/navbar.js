import React from "react";
// import "../../Pages/style.css"
import icon from "../../img/icon.png"



function Navbar() {
    return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark" id="topbar">
          <a className="navbar-brand" href="/"><img src={icon} width="50" height="50" alt="Javier Barragan" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <a className="nav-link" href="/About"><i className="fas fa-id-card"></i> ABOUT ME</a>
            <a className="nav-link" href="/portfolio"><i className="fas fa-file-code"></i> PORTFOLIO</a>
            <a className="nav-link" href="https://github.com/javyb92"><i className="fab fa-github-square"></i> GITHUB</a>
            <a className="nav-link" href="https://www.linkedin.com/in/javierabarragan92/"><i className="fab fa-linkedin"></i> LINKEDIN</a>
            <a className="nav-link" href="https://drive.google.com/file/d/1jlQPVFSjeCam9_yOl0QTiixDw4mnPm6H/view?usp=sharing"><i className="fas fa-journal-whills"></i> RESUME</a>
            </div>
          </div>
      </nav>
    </div>
    );
  }


export default Navbar;