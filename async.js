const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/get',(req,res)=>{
	var id = req.param('id');
	var token = req.param('token');
	var geo = req.param('geo');
	res.send(id+' '+token+' '+geo )
	console.log("request",req,"response",res)
})

app.get('/get/:version',(req,res)=>{
	res.json({"this is req.params ":req.params.version});
})

app.param('name',(req,res,next,name)=>{
	var modified = name + '-dude';
	req.name = modified;
	next();
})
app.get('/get/users/:name',(req,res)=>{
	res.json({'whats up ':req.name});
})

app.post('/post_api/:id',(req,res)=>{
	var id = req.params.id;  //if we use req.params then we should write /:id in params while post the route
        var token = req.body.token; // used for post basically post give body of req in response.
        var geo = req.body.geo;
        res.json({'id':id,'token':token,'geo':geo}) // used res.json used to print json string on browser
})

app.post('/post_api',(req,res)=>{
	const username = req.body.username;
	res.json({"username":username})
})

app.listen(4500,()=>{
	console.log("port running on 4500..");
})
