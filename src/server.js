"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
app.get("/test", function (request, response) {
    return response.send("Hello World");
});
app.listen(3000, function () { return console.log("Server is running"); });
