//Ici définir les routes

const router = require('express').Router();
const {
    homeCtrl,
    servicesCtrl,
    contactCtrl,
} = require('../controllers/app.ctrl');

router.get('/home', homeCtrl);
router.get('/services', servicesCtrl);
router.get('/contact', contactCtrl);


const {
    fetchAllRecipesCtrl,
} = require('../controllers/api.ctrl');

router.get('/recettes', fetchAllRecipesCtrl)

module.exports = router;