/*
    Title : Routes
    Description : Application Routes
    Author : Developer Sifat
    Data : Koitam na

*/

// dependencies 
const {sampleHandler} = require('./handlers/routeHandlers/sampleHandlers');


const routes = {
    sample : sampleHandler,
}

module.exports = routes;

