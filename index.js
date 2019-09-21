'use strict';
const socket = new (require('net')).Socket();

exports.portTest = function (host, port, func){
    return new Promise((resolve => {
        const end = (result,func) => {
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

