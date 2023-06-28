//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Counter from "./component/Counter";


// Logic for the counter with conditionals

let unit=0;
let tens=0;
let hundred=0;
let thousands=0;
let tenthousands=0;
let hundredthousands=0;

setInterval(() => {
    unit++;
    if (unit === 10){
        unit = 0;
        tens++;
    }
    if (tens === 10){
        tens = 0;
        hundred++;
    }
    if (hundred === 10){
        hundred = 0;
        thousands++;
    }
    if (thousands === 10){
        thousands = 0;
        tenthousands++;
    }
    if (tenthousands === 10){
        tenthousands = 0;
        hundredthousands++;
    }
    if (hundredthousands === 10){
        hundredthousands = 0;
    }

    //render react application
    ReactDOM.render(
        <Counter 
        unit={unit}
        tens={tens}
        hundreds={hundred}
        thousands={thousands}
        tenthousands={tenthousands}
        hundredthousands={hundredthousands}/>, document.querySelector("#app"));
}, 1000);