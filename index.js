const shell = require('shelljs');
const express = require("express");
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

app.listen(() => {
    console.log("Listening on Port" + sPort);
});