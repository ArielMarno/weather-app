import React, {useState} from "react";
import Form from './Form';
import Card from "./Card";

const WeatherPanel = () =>{

    // Define URLS para las llamadas a la API 
    let weatherURL = "https://api.openweathermap.org/data/2.5/weather?appid=594c251384889ff2774449fd93be23e5&lang=es";
    let cityURL = "&q=";

    let forecastURL = "https://api.openweathermap.org/data/2.5/forecast?appid=594c251384889ff2774449fd93be23e5&lang=es";

    // Define variables de estado para el clima actual, pronostico, estado de carga, mostrar estado y ubicacion
    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState("");

    // Funcion asincrona para traer datos del clima actual y pronostico de la ubicacion provista por el usuario
    const getLocation = async(loc) => {
        setLoading(true);
        setLocation(loc);

        
        // URL de la API agregando la ubicación a la URL base para el clima actual
        weatherURL = weatherURL + cityURL + loc;

        await fetch(weatherURL).then((response) =>{
            if(!response.ok) throw {response}
            return response.json();
        }).then((weatherData) =>{
            console.log(weatherData);
            setWeather(weatherData);
        }).catch(error =>{
            console.log(error);
            setLoading(false);
            setShow(false);
        });


        // URL de la API agregando la ubicación a la URL base para el pronostico
        forecastURL = forecastURL + cityURL + loc;

        await fetch(forecastURL).then((response) =>{
            if(!response.ok) throw {response}
            return response.json();
        }).then((forecastData) =>{
            console.log(forecastData);
            setForecast(forecastData);

            setLoading(false);
            setShow(true);

        }).catch(error =>{
            console.log(error);
            setLoading(false);
            setShow(false);
        });

    }

    return(

        <React.Fragment>
            
            <Form newLocation = {getLocation}/>
            <Card showData={show} loadingData={loading} weather={weather} forecast={forecast}/>

        </React.Fragment>

    )
}

export default WeatherPanel;