const { resolve } = require('path');
const { allRecipes } = require('../data/db.json');


exports.fetchAllRecipesCtrl = (req, res) => {
    try {
        res.json(allRecipes);
        
    } catch (error) {

        //Code erreur fonctionnel 
        res.status(500).json({
            code:'500',
            title:'Fichier Introuvable'
        })
    }
};


