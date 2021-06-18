const express = require('express');
// const bodyParser=require("body-parser");

const app=express();

app.use('*/images',express.static('public/images'));
app.use('*/css',express.static('public/css'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
})); 


app.listen(1305,function(){
    console.log("server is running on port 1305");
});
app.get("/",function(request,respond){
    respond.sendFile(__dirname+"/cal.html");
});


app.post("/",function(req,res){
    var num1=req.body.firstname;
    var num2=req.body.secondname;  
    res.write("<h1><center>percentage of love between</center></h1>");
    res.write("<h1><center> "+num1+" & "+num2+" </center></h1>");
    var num=Math.random()*50;
    num=Math.floor(num)+51; 
    res.write("<center><h1> "+num+"% </h1></center>");
    res.send();
});
