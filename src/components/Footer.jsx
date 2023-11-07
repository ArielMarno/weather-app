import '../css/footer.css';
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import email from "../assets/mail.png";
const Footer = () => {
  return (
      <div>
        <footer>
              <div className="contacto">
                <a href="https://github.com/ArielMarno" target="_blank" rel="noopener noreferrer"><img className="social" src={github}/></a>
                <a href="https://www.linkedin.com/in/arielmarchesano/" target="_blank" rel="noopener noreferrer"><img className="social" src={linkedin} alt="linkedin logo"/></a>
                <a href="mailto: arielmarno@outlook.com"><img className= "social-outlook" src={email} alt="outlook logo"/></a>
              </div>       
              <div className="desarrollador">
                  <p>Sitio web desarrollado por<span> Ariel Marchesano</span>.</p>
              </div>  
        </footer>
      </div>
    )
}

export default Footer;