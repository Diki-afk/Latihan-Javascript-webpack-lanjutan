import "bootstrap/dist/css/bootstrap.min.css";
import "regenerator-runtime";
import "./style.css";
import "./rachel-park-hrlvr2ZlUNk-unsplash.jpg";
import mainSearch from "./scripts/show/main.js";
import {buttonSeafood,buttonBeef, buttonChicken, buttonVegetarian, buttonMiscellaneous}from "./scripts/show/mainButton.js";

document.addEventListener("DOMContentLoaded", mainSearch);
document.addEventListener("DOMContentLoaded", buttonSeafood);
document.addEventListener("DOMContentLoaded", buttonBeef);
document.addEventListener("DOMContentLoaded", buttonChicken);
document.addEventListener("DOMContentLoaded", buttonVegetarian);
document.addEventListener("DOMContentLoaded", buttonMiscellaneous);