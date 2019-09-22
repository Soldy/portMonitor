
'use strict';

const portTestPing   = require("./index.js").portTestPing;

const test = async function(host, port){
    let result = await portTestPing(host,port);
    console.log("test "+host+":"+port.toString()+" = "+result);
}

let domainList = [
     "google.com",
     "facebook.com",
     "nasa.com",
     "youtube.com",
     "wikipedia.com",
     "gmail.com",
     "twitter.com",
     "github.com",
     "yahoo.com",
     "bing.com",
     "amazon.com",
     "ebay.com",
];
let portList = [
    22,
    80,
    443,
    3600
]
for(let d of domainList)
    for(let p of portList)
        test(d,p);
