/*
    Title : Uptime monitoring appication
    Description : a restful api to monitor up or down tim of user defined links
    Author : Developer Sifat
    Data : Koitam na

*/


// dependencies
const http = require("http");
const {handleReqRes} = require('./helpers/handleReqRes');
const lib = require("./lib/data");
const data = require('./lib/data')


// module scafolding
const app = {};     

// testing file system
// data.create('test','listFile',{"name" : "Sifat", "Hobby" : "Programming"}, function(err){
//     console.log(`something went wrong`, err)
// })

// read the file
// data.read('test','listFile',(err,result) => {
//     console.log(err, result)
// })

// update the exiting file
// data.update('test','listFile',{name : "Koira", Pola: "Shabok"},(err) => {
//     console.log(err);
// })


// delete the exiting file
// lib.delete('test','listFile',(err) => {
//     console.log(err);
// })

// configaration
app.config = {
    port : 6000,
}


app.createServer = () => {
    const server = http.createServer(app.handlReqRes)
    server.listen(app.config.port, () => {
        console.log(`Listening to the port ${app.config.port} Successfully`)
    })
}




//handle Request Response
app.handlReqRes = handleReqRes;

app.createServer();