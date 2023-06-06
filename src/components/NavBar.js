
const NavBar = ()=>{
    return(
      <nav className="navbar bg-dark navbar-expand-lg mb-4" data-bs-theme="dark">
      <div className="container-fluid">
        <h2 className="navbar-brand mt-1"><span className="weather">Weather</span>App</h2>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
          <span className="navbar-text">
            React Js./Bootstrap
          </span>
        </div>
      </div>
    </nav>
        
    )
}

export default NavBar;