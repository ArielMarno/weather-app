import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import email from "../assets/mail.png";
import webicon from "../assets/web-icon.png";

const NavBar = ()=>{
    return(
      <nav className="navbar navbar-expand-lg fixed-top" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><span className="weather">Weather</span>App <img src={webicon}/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
          <div className="contact-icons">
              <a href="https://github.com/ArielMarno" target="_blank" rel="noopener noreferrer"><img className="social" src={github}/></a>
              <a href="https://www.linkedin.com/in/ariel-alejandro-marchesano-97729b26b/" target="_blank" rel="noopener noreferrer"><img className="social" src={linkedin} alt="linkedin logo"/></a>
              <a href="mailto: arielmarno@outlook.com"><img className= "social-outlook" src={email} alt="outlook logo"/></a>
          </div>
        </div>
      </div>
    </nav>
        
    )
}

export default NavBar;