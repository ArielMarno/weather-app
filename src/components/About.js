import logo from "../assets/weather-logo.png"
const About = () => {
  return (
    <div className="container">
      <div className="about row" id="about">
            <h2 className="col-md-6">Weather<span className="app">App <img src={logo} alt="logo WeatherApp"/></span></h2>
            <p className="col-md-6">
              Aplicación web desarrollada con el proposito de proveer en tiempo real el estado del clima en la region solicitada, asi como tambien el pronostico dentro de las proximas 6, 9 y 12 horas. 
              Conexion simple a la API de OpenWeatherMap.
            </p>
      </div>
    </div>

  )
}

export default About;