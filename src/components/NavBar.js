const NavBar = ()=>{
    return(
      <nav class="navbar bg-dark navbar-expand-lg mb-4" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><span className="weather">Weather</span>App</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
          <span class="navbar-text">
            React Js./Bootstrap
          </span>
        </div>
      </div>
    </nav>
        
    )
}

export default NavBar;