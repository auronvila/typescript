"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
axios_1.default.get("https://jsonplaceholder.typicode.com/users/1").then(function (res) {
    var data = res.data;
    var username = data.username;
    console.log(data);
});
