const express =require("express");
const mensRanking = require("../src/models/mens")
const port = process.env.PORT || 3000;
const app =express();
app.use(express.json());
require("../src/db/conn")

// adding data

app.post('/mens',async(req,res)=>{
try {
    const mensRecord= new mensRanking(req.body);
    console.log(req.body);
   const data= await mensRecord.save();
   res.status(201).send(data);
} catch (error) {
    res.status(400).send(error);
}
})


// getting  a data

app.get('/mens',async(req,res)=>{
    try {
        const mensData=  await mensRanking.find({});
        res.status(201).send(mensData);
        console.log(mensData);
    } catch (error) {
        res.status(400).send(error);
    }
})

//getting a data by id
app.get('/mens/:id',async(req,res)=>{
    try {
        const _id= req.params.id;
    const data= await mensRanking.findById({_id:_id});
    console.log(data);
    res.status(201).send(data);
    } catch (error) {
        res.status(400).send(error);
    }
});

//getting data by name

app.get('/men/:name',async(req,res)=>{
    try {
        const sName= req.params.name;
        const data= await mensRanking.find({name:sName});
        res.status(201).send(data);
        console.log(data);

    } catch (error) {
        res.status(400).send(error);
    }
})


app.listen(port,()=>{
    console.log(`connection at port no ${port}`);
})