import Spinner from "./Spinner";

const Card = ({ loadingData, showData, weather, forecast }) => {

    // Obtener la fecha vigente en formato dia/mes/año
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var date = day + "/" + month + "/" + year;

    // Inicializa variables URL para el icono climatico.
    var url = "";
    var iconUrl = "";

    // Inicializa variables para los iconos del pronostico extendido.
    var iconUrl3 = "";
    var iconUrl6 = "";
    var iconUrl9 = "";

    // Inicializa variables para el pronostico extendido. 
    var forecastDate3 = "";
    var forecastDate6 = "";
    var forecastDate9 = "";


    if (loadingData) {
        return <Spinner />;
    }

    //Información esta lista para ser mostrada 

    if(showData){

        // Establece la URL para el icono del clima vigente
        url = "http://openweathermap.org/img/w/";
        iconUrl = url + weather.weather[0].icon + ".png";

        // Establece la URL para los iconos del pronostico extendido
        iconUrl3 = url + forecast.list[1].weather[0].icon + ".png";
        iconUrl6 = url + forecast.list[2].weather[0].icon + ".png";
        iconUrl9 = url + forecast.list[3].weather[0].icon + ".png";

        // Establece formato y fecha de los pronosticos extendidos.
        forecastDate3 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' + forecast.list[1].dt_txt.substring(11, 13);

        forecastDate6 = forecast.list[2].dt_txt.substring(8, 10) + '/' + forecast.list[2].dt_txt.substring(5, 7) + '/' + forecast.list[2].dt_txt.substring(0, 4) + ' ' + forecast.list[2].dt_txt.substring(11, 13);

        forecastDate9 = forecast.list[3].dt_txt.substring(8, 10) + '/' + forecast.list[3].dt_txt.substring(5, 7) + '/' + forecast.list[3].dt_txt.substring(0, 4) + ' ' + forecast.list[3].dt_txt.substring(11, 13);
    }

    return (
        <div className="weather-card">

            {

                showData === true ? (

            
                        <div className="weather-section">

                            <div className="weather-data">

                                <div className="card-top">
                                    <h3 className="card-title">{weather.name}</h3>
                                    <p className="card-date">{date}</p>
                                    <h1 className="card-temp">{(weather.main.temp - 273.15).toFixed(1)}°C</h1>
                                    <p className="card-description"><img src={iconUrl} alt="icon"/>{weather.weather[0].description}</p>
                                </div>

                                <div className="card-bottom">
                                    <h5 className="card-text">Maxima: {(weather.main.temp_max - 273.15).toFixed(1)}°C</h5>
                                    <h5 className="card-text">Minima: {(weather.main.temp_min - 273.15).toFixed(1)}°C</h5>
                                    <h5 className="card-text">S. Térmica: {(weather.main.feels_like - 273.15).toFixed(1)}°C</h5>
                                    <h5 className="card-text">Humedad: {weather.main.humidity}%</h5>
                                    <h5 className="card-text">Viento: {weather.wind.speed}m/s</h5>
                                </div>
                    
                            </div>
                            
                   
                            <div className="forecast-data">

                                <div className="forecast-card">
                                    <p>{forecastDate3}h</p>
                                    <img src={iconUrl3} alt="icon"/>
                                    <p className="description">{forecast.list[1].weather[0].description}</p>
                                    <p className="temp">{(forecast.list[1].main.temp - 273.15).toFixed(1)}°C</p>
                                </div>
                                            
                                <div className="forecast-card">
                                    <p>{forecastDate6}h</p>
                                    <img src={iconUrl6} alt="icon"/>
                                    <p className="description">{forecast.list[2].weather[0].description}</p>
                                    <p className="temp">{(forecast.list[2].main.temp - 273.15).toFixed(1)}°C</p>
                                </div>
                                            
                                <div className="forecast-card">
                                    <p>{forecastDate9}h</p>
                                    <img src={iconUrl9} alt="icon"/>
                                    <p className="description">{forecast.list[3].weather[0].description}</p>
                                    <p className="temp">{(forecast.list[3].main.temp - 273.15).toFixed(1)}°C</p>
                                </div>

                            </div>
                        
                    </div>
                ):(
                    <h2 className="text-light">Sin datos</h2>
                 )
            }

        </div >
    );

}

export default Card; 