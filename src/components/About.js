
const About = () => {
  return (
    <div className="container">
      <div className="about row" id="about">
            <h2 className="col-md-6">Weather<span className="app">App</span></h2>
            <p className="col-md-6">
              Aplicación web desarrollada con el proposito de proveer en tiempo real el estado del clima en la region solicitada, asi como tambien el pronostico dentro de las proximas 6, 9 y 12 horas. 
              Conexión simple a la API de OpenWeatherMap.
            </p>
      </div>
    </div>

  )
}

export default About;