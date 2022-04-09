/*
    Title : Sample Handlers
    Description : Sample Handlers Routes Application
    Author : Developer Sifat
    Data : Koitam na

*/

// module scafolding
const handler = {};

handler.sampleHandler = (requestProperties,callback) => {
    console.log(requestProperties);
    callback(200, {
        message : "This is your sample handler"
    })
}

module.exports = handler;
