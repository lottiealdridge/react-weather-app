import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props){
    const codeMapping ={
        "clear-sky-day": "CLEAR_DAY",
        "clear-sky-night": "CLEAR_NIGHT",
        "few-clouds-day": "PARTLY_CLOUDY_DAY",
        "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
       "scattered-clouds-day": "CLOUDY",
       "scattered-clouds-night": "CLOUDY",
        "rain-day": "RAIN",
        "rain-night": "RAIN",
        "thunderstorm-day": "WIND",
        "thunderstorm-night": "WIND",
        "snow-day": "SNOW",
       "snow-night": "SNOW",
        "mist-day": "FOG",
        "mist-night": "FOG"
}
    return (
        <ReactAnimatedWeather
    icon={codeMapping[props.code]}
    color="black"
    size={52}
    animate={true}
  />
    );
}