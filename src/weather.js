import {updateDisplay} from "./views/home.js";

const api_key = "FTNYGBNTBT8XXCJK8QCEGW2AP";

async function getWeather(city){
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${api_key}`;
    const res = await fetch(url)
    if (res.status == 200){
        const data = await res.json();
        updateDisplay(data);
    }
}

export {getWeather};
