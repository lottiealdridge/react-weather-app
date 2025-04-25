import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() =>{
        setLoaded(false);
    }, [props.city]);


    function handleResponse(response) {
        console.log(response.data);
        setForecast(response.data.daily);
        setLoaded(true);

    }

    if (loaded) {
        return (
            <div className="WeatherForecast">
                <div className="row">
                    {forecast.map(function(dailyForecast, index){
                        if (index < 6) {
                        return(
                            <div className="col" key={index}>
                            <WeatherForecastDay data={dailyForecast} />
                        </div>
                        );
                    } else {
                        return null;
                    }

                    }
                )}
                </div>
            </div>)

    } else {
        let apiKey = "993a6b7650e8d3940tof6da3ca59d8f7";
        let city = (props.city);
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
    
        axios.get(apiUrl).then(handleResponse);
    }


    
}