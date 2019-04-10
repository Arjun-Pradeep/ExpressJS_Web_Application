const express=require('express');  //Loading express
const ehbs=require('express-handlebars');

var app=express(); //a variable to express function

app.engine('handlebars',ehbs({defaultLayout:'main'}));   //Load the template engine
app.set('view engine','handlebars'); //Load the view engine
app.use(express.static('views/static'));  //To load images we should create static folder
app.use(express.urlencoded());  //To fetch data using request,we should do url encoding


app.post('/getdata',(req,res)=>{
    //res.send("Data Accepted");
    //res.send(req.body);  //To get json details of the form in array style

    var name=req.body.getname; //getname is the name of corresponding html input tag
    var adrs=req.body.getadrs;
    var plc=req.body.getplc;
    var mob=req.body.getmob;
    var email=req.body.getemail;

    res.send(adrs);
    //console.log(name);


});

app.post('/login',(req,res)=>{
    var user=req.body.username;
    var pass=req.body.password;
    if(user=="admin" && pass=="1111"){
        res.send("Success");
    }
    else{
        res.send("Failed");
    }
});

app.post('/register',(req,res)=>{
    var name=req.body.fname;
    var adm=req.body.admn;
    var clg=req.body.college;
    var user=req.body.username;
    var pass=req.body.password;
    res.send(name+adm+clg+user+pass);



    
});

app.get('/',(req,res)=>{

    res.render("index",{name:'Tom'});          //Rendering HTML files otherwise res.send("text or html code")
});  

app.get('/about',(req,res)=>{

    res.render("about");          //Rendering HTML files
}); 


app.get('/contact',(req,res)=>{

    res.render("contact");          //Rendering HTML files
}); 


app.get('/gallery',(req,res)=>{

    res.render("gallery");          //Rendering HTML files
}); 


app.listen(process.env.PORT || 3000,()=>{
    console.log("Web App Running Successfully")
});//3000 is port & listen is similar to run in flask