var express = require("express");
var app = express();

app.set("view engine", "ejs");

var request = require("request");

app.get("/",function(req,res){
    var searchQuery = req.query.movie;
    request("http://www.omdbapi.com/?s="+searchQuery+"&apikey=thewdb",function(err,response,body){
        if(!err && response.statusCode == 200){
            var data = JSON.parse(body);
            // console.log(data);
            
            res.render("home",{data:data});
        }
    });
});

app.get("/search",function(req,res){
    res.render("search");
});

app.listen("3000",function(){
    console.log("Server is starting...");
});