import { createMarkup } from "../utils/createMarkup.js";
import { units } from "../utils/unit.js";


//Here create function for display allRecipes in the card
// Mettre en params la response de la fetch
//Create const [] ds script.js et insérer la response =>const arrayData = [];

export function createCard(arrayAllRecipes){
    const sectionCard = document.getElementById('sectionCardRecipe');

    // console.log(arrayAllRecipes);
    //Jusque là tous marche

    let htmlContent ="";
    let htmlIngredient ="";

    arrayAllRecipes.forEach(recipe => {
        // console.log('recipe', recipe);
        const country =  recipe.name;
        // console.log('recette', recipe.recipes);
        const recipes = recipe.recipes;

    //Loop in allRecipes
        recipes.forEach(recipe=>{


            //Loop in ingredients
            recipe.ingredients.forEach(ingredient => {
                //Create list ingredients with display unit French
                htmlIngredient += `
                <li class="list-group-item my-2 rounded border border-black">
                    <span class="ingredient-name">${ingredient.name}</span> : 
                    <span class="ingredient-quantity">${ingredient.quantity}</span>
                    <span class="ingredient-unit">${units[ingredient.unit]}</span>
                    <input type="text" class="ingredient-input" value="${ingredient.quantity}" style="display: none;">
                </li>`;
            });

            htmlContent += `
            <article class="showArticle">
                <div class="card" style="width: 18rem;" id=${recipe.id}>
                    <div class="card-body">
                        <h5 class="card-title">${recipe.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Pays : ${country}</h6>
                        <ul class="list-group">${htmlIngredient}</ul>
                        <button type='submit' id="delete${recipe.id}" class="btn btn-danger">Supprimer</button>
                        <button type='submit' id="edit${recipe.id}" class="btn btn-warning">Modifier</button>
                    </div>
                </div>
            </article>
            `
        })
    });
    sectionCard.innerHTML = htmlContent;


}

