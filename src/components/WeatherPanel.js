import React, {useState} from "react";
import Form from './Form';
import Card from "./Card";

const WeatherPanel = () =>{

    // Define base URLs for weather and forecast API calls
    let weatherURL = "https://api.openweathermap.org/data/2.5/weather?appid=594c251384889ff2774449fd93be23e5&lang=es";
    let cityURL = "&q=";

    let forecastURL = "https://api.openweathermap.org/data/2.5/forecast?appid=594c251384889ff2774449fd93be23e5&lang=es";

    // Define state variables for weather, forecast, loading status, show status, and location
    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState("");

    // Define an asynchronous function to fetch weather and forecast data for a given location
    const getLocation = async(loc) => {
        setLoading(true);
        setLocation(loc);

        
        // Construct weather API URL by appending location to base URL
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


        // Construct forecast API URL by appending location to base URL
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