"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.srv = void 0;
var node_windows_1 = require("node-windows");
var node_windows_2 = require("node-windows");
var serviceLog = new node_windows_2.EventLogger();
var options = {
    name: 'Suportfy',
    description: 'API para controle de projetos',
    script: './dist/src/index.js'
};
var srv = function () {
    var srv = new node_windows_1.Service(options);
    srv.on('install', function () {
        srv.start();
        console.log('Suportfy service installed!');
        serviceLog.info('Suportfy service installed!');
    });
    return srv;
};
exports.srv = srv;
(0, exports.srv)().install();
