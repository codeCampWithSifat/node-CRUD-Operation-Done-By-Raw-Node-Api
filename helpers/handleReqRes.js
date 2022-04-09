/*
    Title : Uptime monitoring appication
    Description : handle Request Response
    Author : Developer Sifat
    Data : Koitam na

*/


// dependencies
const url = require("url");
const {StringDecoder} = require('string_decoder');
const routes = require('../routes');
const {notFoundHandler} = require('../handlers/routeHandlers/notFoundHandlers')

// module sacfolding
const handler = {};


handler.handleReqRes = (req,res) => {
    //request handling
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.path;
    const trimmedPath = path.replace(/^\/+|\/+$/g,'');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headerObject = req.headers;

    const requestProperties = {
        parsedUrl,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headerObject
    };

    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;

   

    
    const decoder = new StringDecoder('utf-8');
    let realData = '';

    req.on('data',(buffer) => {
        realData += decoder.write(buffer);
    });

    req.on('end',() => {

        realData += decoder.end();
        chosenHandler(requestProperties,(statusCode,payload) => {
            statusCode = typeof statusCode === "number" ? statusCode : 500;
            payload = typeof payload === 'object' ? payload : {};
            const payLoadString = JSON.stringify(payload);
    
            // return the final response
            res.writeHead(statusCode);
            res.end(payLoadString)
            res.end("Hello Developer Sifat How are you");
        });
        // console.log(realData)
        
        
    })
   
}

module.exports = handler;