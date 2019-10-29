const shell = require('shelljs');
const express = require("express");
const http = require("http");
const app = express();
const sPort = 1337;

app.get("/restart", (req, res) => {
    shell.exec("csgoserver restart", {async:true});
    res.json({message: "Triggered restart"});
});

app.get("/update", (req, res) => {
    shell.exec("csgoserver force-update", {async:true});
    res.json({message: "Triggered server update"});
});

http.createServer(app).listen(1337, () => {
    console.log("Listening on Port " + sPort);
});