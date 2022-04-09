/*
    Title : data storage file system
    Description : data storage file system in own computer
    Author : Developer Sifat
    Data : Koitam na

*/

const fs = require("fs");
const path = require("path");


const lib = {};

//base directory of the data folder
lib.basedir = path.join(__dirname,"/../.data/");

//write data to file
lib.create = function(dir,file,data,callback) {
    // opent file for writing 
    fs.open(`${lib.basedir + dir}/${file}.json`, "wx", function(err , fileDescriptor) {
        if(!err && fileDescriptor) {
            // convert data to string
            const stringData = JSON.stringify(data);

            // write data to file and close it
            fs.writeFile(fileDescriptor,stringData,function(err2)  {
                if(!err2){
                    fs.close(fileDescriptor, function(err3){
                        if(!err3) {
                            callback(false)
                        } else {
                            callback("Error Closing The New File")
                        }
                    })
                } else {
                    callback("Error Writing To New File")
                }
            })
        } else {
            callback(err)
        }
    })
}

//read file from the file
lib.read = (dir,file,callback) => {
    fs.readFile(`${lib.basedir + dir}/${file}.json`, 'utf-8' ,(err,data) => {
        callback(err,data)
    })
}


// update the existing file from my data base
lib.update = (dir,file,data,callback) => {
    // file open for writing
    fs.open(`${lib.basedir + dir}/${file}.json`,'r+', (err, fileDescriptor) => {
        if(!err && fileDescriptor) {
            // converte the data to string
            const stringData = JSON.stringify(data);

            // file khalli korer niyom
            fs.ftruncate(fileDescriptor,(err) => {
                if(!err) {
                    // write the file and colse it 
                    fs.writeFile(fileDescriptor,stringData, (err) => {
                        if(!err) {
                            fs.close(fileDescriptor,(err) => {
                                if(!err) {
                                    callback(false)
                                } else {
                                    callback("Error Closing File")
                                }
                            })
                        } else {
                            callback('Try Again Later')
                        }
                    })
                } else {
                    callback("Something went wrong")
                }
            })
        } else {
            callback(err)
        }
    })
}

// delete the exiting file
lib.delete = (dir,file,callback) => {

    // unlink the file
    fs.unlink(`${lib.basedir + dir}/${file}.json`, (err) => {
        if(!err) {
            callback(false)
        } else {
            callback("Some Thing Went Wrong")
        }
    })
}

module.exports = lib;