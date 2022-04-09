/*
    Title : Not Found Handlers
    Description : Not Found Routes Application
    Author : Developer Sifat
    Data : Koitam na

*/

// module scafolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    console.log(requestProperties);
    callback(404, {
        messsage : 'Not Found Your Current Url'
    })
}

module.exports = handler;