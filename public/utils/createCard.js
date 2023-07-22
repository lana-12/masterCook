import { createMarkup } from "../utils/createMarkup.js";
import { units } from "../utils/unit.js";


//Here create function for display allRecipes in the card
// Mettre en params la response de la fetch
//Create const [] ds script.js et insérer la response =>const arrayData = [];

export function createCard(arrayAllRecipes){
    const sectionCard = document.getElementById('sectionCardRecipe');

    createMarkup('h2', 'yes', sectionCard);
    // console.log(arrayAllRecipes);
    //Jusque là tous marche


    //Probleme h2 ne s'affiche pas, Revoir les innerHtml 
    let htmlContent ="";

    arrayAllRecipes.forEach(recipe => {
        // console.log('recipe', recipe);
        console.log('country', recipe.name);
        const h2Card = createMarkup('h2', recipe.name, sectionCard);
        sectionCard.innerHTML += h2Card;
        console.log('recette', recipe.recipes);

        const recipes = recipe.recipes;

        recipes.forEach(recipe=>{

            htmlContent += `
                <div class="card" style="width: 18rem;" id=${recipe.id}>
                    <div class="card-body">
                        <h5 class="card-title">${recipe.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button type='submit' id="delete${recipe.id}" class="btn btn-danger">Supprimer</button>
                        <button type='submit' id="edit${recipe.id}" class="btn btn-warning">Modifier</button>
                    </div>
                </div>
            `
        })
    });
    sectionCard.innerHTML = htmlContent;


}

