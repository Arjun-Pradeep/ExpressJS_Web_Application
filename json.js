const express=require('express');  //Loading express

var app=express(); //a variable to express function

app.get('/',(req,res)=>{

    res.send('[{"name":"Tom","age:23},{"name":"Riya","age":22}]');
});  
                  //1st arg:path(here \) 2nd arg:request & response
app.listen(3008);//3000 is port & listen is similar to run in flask