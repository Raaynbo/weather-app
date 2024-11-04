import {getWeather} from '../weather.js';

function homeDisplay(container){

    const searchzone = document.createElement('form');
    const searchbar = document.createElement('input');
    const searchbtn = document.createElement('input');
    searchbar.type = "text";
    searchbtn.type = "submit";
    searchbtn.href = "#";

    container.append(searchzone);
    searchzone.append(searchbar);
    searchzone.append(searchbtn);

    searchbtn.addEventListener("click", (e)=> {
        e.preventDefault();
        if (searchbar.value == ""){
            return false;
        }
        try {
            getWeather(searchbar.value);
        }catch (e){
            console.error(e);
        }
    })
}

function updateDisplay(data){
    console.log(data)
}

export {homeDisplay, updateDisplay};
