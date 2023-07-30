import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import email from "../assets/mail.png";
const Footer = () => {
  return (
      <div className="footer">
        <div>
              <div className="contact-icons" id="contact">
                <a href="https://github.com/ArielMarno" target="_blank" rel="noopener noreferrer"><img className="social" src={github}/></a>
                <a href="https://www.linkedin.com/in/ariel-alejandro-marchesano-97729b26b/" target="_blank" rel="noopener noreferrer"><img className="social" src={linkedin} alt="linkedin logo"/></a>
                <a href="mailto: arielmarno@outlook.com"><img className= "social-outlook" src={email} alt="outlook logo"/></a>
              </div>       
              <div className="develope-by">
                  <p>Website developed by <span className="my-name">Ariel Marno</span></p>
              </div>  
        </div>
      </div>
    )
}

export default Footer;