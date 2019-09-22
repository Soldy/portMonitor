'use strict';
const net = require('net');

exports.portTest = function (host, port, func){
    return new Promise((resolve => {
        let socket = new net.Socket();
        let end = (result,func) => {
             socket.destroy();
             if(typeof socket !== "undefined")
                 socket.end();
             if(typeof func !== "undefined")
                 func(result);
             resolve(result);
        };
        socket.setTimeout(4000);
        socket.once('error', ()=>end(false));
        socket.once('timeout', ()=>end(false));
        socket.connect(port, host, ()=>end(true));
    }));
};

exports.portTestPing = function (host, port){
    return new Promise((resolve => {
        let socket = new net.Socket();
        let timeStart =0;
        let timeEnd = 0
        let end = (result) => {
             timeEnd = Date.now();
             socket.destroy();
             if(typeof socket !== "undefined")
                 socket.end();
             if(result)
                 resolve(timeEnd-timeStart);
             resolve(-1);
        };
        socket.setTimeout(4000);
        socket.once('error', ()=>end(false));
        socket.once('timeout', ()=>end(false));
        timeStart=Date.now();
        socket.connect(port, host, ()=>end(true));
    }));
};

