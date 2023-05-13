import Spinner from "./Spinner";

const Card = ({ loadingData, showData, weather, forecast }) => {

    // Get the current date and format it as day/month/year
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var date = day + "/" + month + "/" + year;

    // Initialize variables for the URLs of the weather icons
    var url = "";
    var iconUrl = "";

    // Initialize variables for the URLs of the forecast icons
    var iconUrl3 = "";
    var iconUrl6 = "";
    var iconUrl9 = "";

    // Initialize variables for the dates of the forecast
    var forecastDate3 = "";
    var forecastDate6 = "";
    var forecastDate9 = "";


    if (loadingData) {
        return <Spinner />;
    }

    // If data is ready to be shown

    if(showData){

        // Set the URL for the current weather icon
        url = "http://openweathermap.org/img/w/";
        iconUrl = url + weather.weather[0].icon + ".png";

        // Set the URLs for the forecast icons
        iconUrl3 = url + forecast.list[1].weather[0].icon + ".png";
        iconUrl6 = url + forecast.list[2].weather[0].icon + ".png";
        iconUrl9 = url + forecast.list[3].weather[0].icon + ".png";

        // Format and set the dates for the forecast
        forecastDate3 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' + forecast.list[1].dt_txt.substring(11, 13);

        forecastDate6 = forecast.list[2].dt_txt.substring(8, 10) + '/' + forecast.list[2].dt_txt.substring(5, 7) + '/' + forecast.list[2].dt_txt.substring(0, 4) + ' ' + forecast.list[2].dt_txt.substring(11, 13);

        forecastDate9 = forecast.list[3].dt_txt.substring(8, 10) + '/' + forecast.list[3].dt_txt.substring(5, 7) + '/' + forecast.list[3].dt_txt.substring(0, 4) + ' ' + forecast.list[3].dt_txt.substring(11, 13);
    }

    return (
        <div className="mt-5">

            {

                showData === true ? (

                    <div className="container">
                        <div className="card mb-3 mx-auto bg-dark text-light">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <h3 className="card-title">{weather.name}</h3>
                                    <p className="card-date">{date}</p>
                                    <h1 className="card-temp">{(weather.main.temp - 273.15).toFixed(1)}°C</h1>
                                    <p className="card-description"><img src={iconUrl} alt="icon"/>{weather.weather[0].description}</p>
                                    <img src="https://images.pexels.com/photos/2073624/pexels-photo-2073624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid rounded-start" alt="vista espacial de la tierra"/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body text-start mt-2">
                                        <h5 className="card-text">Temperatura Maxima: {(weather.main.temp_max - 273.15).toFixed(1)}°C</h5>
                                        <h5 className="card-text">Temperatura Minima: {(weather.main.temp_min - 273.15).toFixed(1)}°C</h5>
                                        <h5 className="card-text">Sensacion Térmica: {(weather.main.feels_like - 273.15).toFixed(1)}°C</h5>
                                        <h5 className="card-text">Humedad: {weather.main.humidity}%</h5>
                                        <h5 className="card-text">Velocidad del viento: {weather.wind.speed}m/s</h5>
                                    </div>
                                    <div className="line"></div>
                                    <div className="row mt-2">
                                        <div className="forecast col">
                                            <p>{forecastDate3}h</p>
                                            <img src={iconUrl3} alt="icon"/>
                                            <p className="description">{forecast.list[1].weather[0].description}</p>
                                            <p className="temp">{(forecast.list[1].main.temp - 273.15).toFixed(1)}°C</p>
                                        </div>
                                        <div className="forecast col">
                                            <p>{forecastDate6}h</p>
                                            <img src={iconUrl6} alt="icon"/>
                                            <p className="description">{forecast.list[2].weather[0].description}</p>
                                            <p className="temp">{(forecast.list[2].main.temp - 273.15).toFixed(1)}°C</p>
                                        </div>
                                        <div className="forecast col">
                                            <p>{forecastDate9}h</p>
                                            <img src={iconUrl9} alt="icon"/>
                                            <p className="description">{forecast.list[3].weather[0].description}</p>
                                            <p className="temp">{(forecast.list[3].main.temp - 273.15).toFixed(1)}°C</p>
                                        </div>
                                    </div>
                                </div>
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