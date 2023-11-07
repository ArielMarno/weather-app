import '../css/data.css';
import Spinner from "./Spinner";
import calendario from '../assets/calendario.png';
import reloj from '../assets/hora.png';
import arriba from '../assets/maxima.png';
import abajo from '../assets/minima.png';
import stermica from '../assets/sensacion_termica.png';
import humedad from '../assets/humedad.png';
import viento from '../assets/viento.png';

const Data = ({ loadingData, showData, weather, forecast }) => {

    // Obtener la fecha vigente en formato dia/mes/año
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var date = day + "/" + month + "/" + year;
    var fechaActual = new Date();
    let hora = fechaActual.getHours().toString().padStart(2, '0');
    let minutos = fechaActual.getMinutes().toString().padStart(2, '0');

    // Inicializa variables URL para el icono climatico.
    var url = "";
    var iconUrl = "";

    // Inicializa variables para los iconos del pronostico extendido.
    var iconUrl6 = "";
    var iconUrl9 = "";
    var iconUrl12 = "";

    // Inicializa variables para el pronostico extendido. 
    var forecastDate6 = "";
    var forecastDate9 = "";
    var forecastDate12 = "";


    if (loadingData) {
        return <Spinner />;
    }

    //Información esta lista para ser mostrada 

    if(showData){

        // Establece la URL para el icono del clima vigente
        url = "http://openweathermap.org/img/w/";
        iconUrl = url + weather.weather[0].icon + ".png";

        // Establece la URL para los iconos del pronostico extendido
        iconUrl6 = url + forecast.list[1].weather[0].icon + ".png";
        iconUrl9 = url + forecast.list[2].weather[0].icon + ".png";
        iconUrl12 = url + forecast.list[3].weather[0].icon + ".png";

        // Establece formato y fecha de los pronosticos extendidos.
        forecastDate6 = forecast.list[1].dt_txt.substring(11, 13);

        forecastDate9 = forecast.list[2].dt_txt.substring(11, 13);

        forecastDate12 = forecast.list[3].dt_txt.substring(11, 13);
    }

    return (
        <div className="clima">

            {

                showData === true ? (
                        <div>

                            <div className="datos">

                                <div className="primer-contenedor">

                                    <div className="principal">
                                        <h1 className="temperatura">{(weather.main.temp - 273.15).toFixed(1)}°</h1>
                                        <h3 className="ciudad">{weather.name}</h3>
                                        <p className="icon-description"><img src={iconUrl} alt="icon"/>{weather.weather[0].description}</p>
                                    </div>

                                    <div className="extendido">
                                        <div className="seis">
                                            <p className='hora'>{forecastDate6}h</p>
                                            <img src={iconUrl6} alt="icon"/>
                                            <p className="descripcion">{forecast.list[1].weather[0].description}</p>
                                            <p className="temp">{(forecast.list[1].main.temp - 273.15).toFixed(1)}°</p>
                                        </div>
                                                    
                                        <div className="nueve">
                                            <p className='hora'>{forecastDate9}h</p>
                                            <img src={iconUrl9} alt="icon"/>
                                            <p className="descripcion">{forecast.list[2].weather[0].description}</p>
                                            <p className="temp">{(forecast.list[2].main.temp - 273.15).toFixed(1)}°</p>
                                        </div>
                                                    
                                        <div className="doce">
                                            <p className='hora'>{forecastDate12}h</p>
                                            <img src={iconUrl12} alt="icon"/>
                                            <p className="descripcion">{forecast.list[3].weather[0].description}</p>
                                            <p className="temp">{(forecast.list[3].main.temp - 273.15).toFixed(1)}°</p>
                                        </div>
                                    </div>

                                </div>
                               

                                <div className="segundo-contenedor">

                                    <div>
                                        <h5><img src={calendario} alt="" />Fecha</h5>
                                        <h3 className='calendario'>{date}</h3>
                                    </div>
                                    <div>
                                        <h5><img src={reloj} alt="" />Hora</h5>
                                        <h3>{hora + ":" + minutos}</h3>
                                    </div>

                                    <div>
                                        <h5><img src={arriba} alt="" />Máxima</h5>
                                        <h3>{(weather.main.temp_max - 273.15).toFixed(1)}°</h3>
                                    </div>

                                    <div>
                                        <h5><img src={abajo} alt="" />Minima</h5>
                                        <h3>{(weather.main.temp_min - 273.15).toFixed(1)}°</h3>
                                    </div>

                                    <div>
                                        <h5><img src={stermica} alt="" />Sensación Termica</h5>
                                        <h3>{(weather.main.feels_like - 273.15).toFixed(1)}°</h3>
                                    </div>

                                    <div>
                                        <h5><img src={humedad} alt="" />Humedad</h5>
                                        <h3>{weather.main.humidity}<span>%</span></h3>
                                    </div>

                                    <div>
                                        <h5><img src={viento} alt="" />Viento</h5>
                                        <h3>{weather.wind.speed}<span>m/s</span></h3>
                                    </div> 

                                </div>
                    
                            </div>
                        
                    </div>
                ):(
                    <h2 className="default"></h2>
                 )
            }

        </div >
    );

}

export default Data; 