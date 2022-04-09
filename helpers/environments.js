/*
    Title : Environments File
    Description : Handle All Environments related things
    Author : Developer Sifat
    Data : Koitam na

*/

// module scafolding
const environments = {};

environments.staging = {
  port: 4000,
  envName: "staging",
};

environments.production = {
  port: 5000,
  envName: "production",
};

// determine which environments was passed
const currentEnvironments =
  typeof process.env.NODE_ENV === "string" ? process.env.NODE_ENV : "staging";

// finally export corresponding enriromnets object
const environmentToExport =
  typeof environments[currentEnvironments] === "object"
    ? environments[currentEnvironments]
    : environments.staging;


    module.exports = environmentToExport; // export module