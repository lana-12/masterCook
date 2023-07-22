import { createMarkup } from "../utils/createMarkup.js";
import { createCard } from "../utils/createCard.js";
import { units } from "../utils/unit.js"

/**
 * Params host,
 */

export function getAllRecipes(host){
    console.log('getAllRecipes');

    try {
        fetch(`${host}/recettes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(res =>res.json())
        .then(allRecipes => {
            // console.log(allRecipes);
            createCard(allRecipes);
        })
    } catch (error) {
        
    }
}