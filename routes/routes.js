const routes = require('./routes/routes');
const routes = require('./routes/routes');
const Model = require('../models/model');
app.use('/api', routes)
const express = require('express');

const router = express.Router()

module.exports = router;


router.post('/customer', async (req, res) => {
    const data = new Model({
        Id: req.body.Id,
        Name: req.body.Name,
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        lastName: req.body.lastName,
        dateOfBirth: req.body.dateOfBirth,
        gender: req.body.gender,
        createdDate: req.body.createdDate,
        modifiedDate: req.body.modifiedDate,
        isDeleted: req.body.isDeleted
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})


router.get('/customerAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/onecustomer/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})