const { request } = require('express');
const Pet = require('../models/exam.model');

module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    });
};
module.exports.createPet = (req, res) => {
    const { petName, petType, petDescription, skillOne, skillTwo, skillThree } = req.body;
    Pet.create({
        petName,
        petType,
        petDescription,
        skillOne,
        skillTwo,
        skillThree
    })
        .then(pet => res.json(pet))
        .catch(err => res.json(err));
};
module.exports.getAllPets = (req, res) => {
    Pet.find({})
        .then(allPets => res.json(allPets))
        .catch(err => res.json(err));
};
module.exports.getPet = (req, res) => {
    Pet.findOne({_id:req.params._id})
        .then(pet => res.json(pet))
        .catch(err => res.json(err))
};
module.exports.updatePet = (req, res) => {
    Pet.findOneAndUpdate({_id:req.params._id}, req.body, {new:true, runValidators:true})
        .then(updatedPet => res.json(updatedPet))
        .catch(err => res.json(err))
};
module.exports.adoptPet = (req, res) => {
    Pet.deleteOne({_id:req.params._id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
};