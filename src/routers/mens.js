const express = require('express');
const mensRanking = require("../models/mens")
const router = new express.Router();
require("../models/mens");

// ***********************************add new document to the database
router.post('/mens', async (req, res) => {
    try {
        const mensRecord = new mensRanking(req.body);
        console.log(req.body);
        const data = await mensRecord.save();
        res.status(201).send(data);
    } catch (error) {
        res.status(400).send(error);
    }
})

// **********************************read Data  from the database

router.get('/mens', async (req, res) => {
    try {
        const data = await mensRanking.find();
        console.log(data);
        res.status(201).send(data);
    } catch (error) {
        res.status(400).send(error);
    }
})

//*********************************** read individual data by id

router.get('/mens/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const data = await mensRanking.findById(_id);
        res.status(201).send(data);
        console.log(data);
    } catch (error) {
        res.status(400).send(error);
    }
})


//************************************update document 

router.patch('/mens/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const updateData = await mensRanking.findByIdAndUpdate(_id, req.body, { new: true });
        res.status(201).send(updateData);
        console.log(updateData);
    } catch (error) {
        res.status(400).send(error);
    }
})

// ***********************************delete document 

 router.delete('/mens/:id',async(req,res)=>{
    try {
        const _id = req.params.id;
        const deleteDocument= await mensRanking.findByIdAndDelete(_id);
        console.log(deleteDocument);
        res.status(201).send(deleteDocument);
    } catch (error) {
        res.status(400).send(error);
    }
 });



module.exports = router;