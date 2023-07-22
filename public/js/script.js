import { getAllRecipes } from "./getAllRecipes.js";
import { createMarkup } from "../utils/createMarkup.js";
import { createCard } from "../utils/createCard.js";
import { units } from "../utils/unit.js"

const endPoint = "https://localhost:4343";
const arrayData = [];

console.log("Hello toi, tu peux le faire");

getAllRecipes(endPoint);

