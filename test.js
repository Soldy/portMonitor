'use strict';

const nanoTest   = new (require("nanoTest")).test();
const portTest   = require("./index.js").portTest;
var ping =function(){
    nanoTest.add(
       "check google",
       {
           "function":portTest,
           "options":['google.com','80']
       },
       "==",
       true 
    );
};



ping();
nanoTest.run();
