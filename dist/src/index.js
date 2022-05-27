"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./server");
(0, server_1.server)().then(function (app) {
    app.listen(3333, function () { return console.log('server is running on port 3333'); });
});
