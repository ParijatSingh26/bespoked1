const express = require("express");
const mongoose =require("mongoose")
const app = express();
const Product = require("./model/Product")


const PORT = process.env.PORT || 3002;
const db =`mongodb+srv://test:test@cluster0.ijylv1k.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(db)

app.listen(PORT, () => console.log(`Listining at port ${PORT}`));
app.get("/",(req,res)=>{
	res.status(200).json("HOME")
})

app.get("/product/get/:id",async(req,res)=>{
	const apiResponse = await Product.findById(req.params.id);
	res.status(200).json(apiResponse);
})

// app.get("/product/list",async(req,res)=>{
// 	const apiResponse = await Product.find({});
// 	console.log(apiResponse);
// 	res.status(200).json({result:"apiResponse"});
// })

app.get("/product/list", async(req, res) => {
	const resData =await Product.find({});
	res.status(200).json(resData)

  });
  


app.get("/product/create/:info",async(req,res)=>{
	const newProduct = new Product({
		 productName:req.params.info,
		 price: 400,
		 description :"this is a branded t shirt"
		 
	})
	const resposeData = await newProduct.save();
	res.status(200).json(resposeData);
})
// const dataSchema = new mongoose.Schema({
// 	name:String,
// 	subject:String
// })
// const Information = mongoose.model('information',dataSchema);

// app.get("/rollno/:name",async (req,res)=>{
	
// 	const silence = new Information({name:req.params.name, subject:'maths'});

// 	const apiRes = await silence.save();
// 	res.status(200).json({res  : apiRes})
// })

// app.get("/name",(req,res)=>{
// 	res.status(200).json({name:"rahul"})
// })

// app.get("/data/list",(req,res)=>{
// 	let lis=[];
// 	for(let i=0; i<=10;i++)lis.push({path:"245678"})
// 	res.status(200).json({list:lis})
// })

// app.get("/raw/list",(req,res)=>{
// 	let lis=[];
// 	for(let i=0;i<=15;i++)
// 	lis.push({name:"rahul"})
// 	res.status(300).json({list:lis})
// })

// app.get("/book/list",(req,res)=>{
// 	let ris=[];
// 	for(let i=0;i<=20;i++)
// 	ris.push({rollno:"23456"})
// 	res.status(200).json({list:ris})
// })

// app.get("/id/:id",(req,res)=>{
// 	res.status(200).json({message:"HOMME PAGE",id:req.params.id})
// })

// app.get("/:id",(req,res)=>{
// 	res.status(200).json({message:"HOMME PAGE"})
// })

