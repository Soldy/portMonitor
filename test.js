'use strict';

const nanoTest   = new (require("nanoTest")).test();
const portTest   = require("./index.js").portTest;
var ping =function(){
    nanoTest.add(
       "check nasa http",
       {
           "function":portTest,
           "options":['nasa.com','80']
       },
       "==",
       true 
    );
    nanoTest.add(
       "check wikipedia https",
       {
           "function":portTest,
           "options":['wikipedia.com','443']
       },
       "==",
       true 
    );
    nanoTest.add(
       "check facebook http",
       {
           "function":portTest,
           "options":['facebook.com','80']
       },
       "==",
       true 
    );
    nanoTest.add(
       "check facebook https",
       {
           "function":portTest,
           "options":['facebook.com','443']
       },
       "==",
       true 
    );
    nanoTest.add(
       "check google http",
       {
           "function":portTest,
           "options":['google.com','80']
       },
       "==",
       true 
    );
    nanoTest.add(
       "check google https",
       {
           "function":portTest,
           "options":['google.com','443']
       },
       "==",
       true 
    );
};



ping();
nanoTest.run();
