const Footer = () => {
  return (
      <div className="footer">
        <div className="row">
              <div className="icons" id="contact">
                <a href="https://github.com/ArielMarno" target="_blank"><img className="social" src="https://cdn3.iconfinder.com/data/icons/sociocons/128/github-sociocon.png"/></a>
                <a href="https://www.linkedin.com/in/ariel-alejandro-marchesano-97729b26b/" target="_blank"><img className="social" src="https://cdn3.iconfinder.com/data/icons/sociocons/128/linkedin-sociocon.png"/></a>
                <a href="mailto: arielmarno@outlook.com"><img className= "social-outlook" src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/Outlook-128.png"/></a>
              </div>       
              <div className="develope-by">
                  <p>Website developed by <span className="my-name">Ariel Marno</span></p>
              </div>  
        </div>
      </div>
    )
}

export default Footer;