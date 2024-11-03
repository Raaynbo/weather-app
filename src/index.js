import "./style.css";
import {homeDisplay } from "./views/home.js";


const app = document.querySelector("#app");



function renderPage(){
    homeDisplay(app);
}


renderPage();

