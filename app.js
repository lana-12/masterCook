const { resolve } = require('path');
const express = require('express');
const app = express();
const router = require('./routing');

// CONFIGURATION DE L'APP
// Quel endroit le front, on peut faire un folder ex: front

app.use(express.static(resolve('public')));
app.use(router);

module.exports = app;