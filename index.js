'use strict'

var express = require('express');

var app = express();

var api = express.Router();

//models
var animals = [
    {
        id: 1,
        name: "Lion/Lioness",
        weight: 160 + "-" + 260 + " kg(male), " + 120 + "-" + 182 + " kg(female)",
        measure: 205 + "-" + 334 + " cm(male), " + 180 + "-" + 270 + " cm(female)",
        averageAge: 8 + " (wild), " + 12 + "-" + 20 + " (captivity)",
        classification: "Mammals",
        family: "Felidae"
    },{
        id: 2,
        name: "Emperor penguin",
        weight: 22 + "-" + 45 + " kg",
        measure: 1.15 + "-" + 1.20 + " meters",
        averageAge: 20 + " (wild), " + 35 + " (captivity)",
        classification: "Birds",
        family: "Spheniscidae"
    },{
        id: 3,
        name: "White shark",
        weight: 680 + "-" + 1100 + " kg",
        measure: 4.5 + "-" + 6 + " meters",
        averageAge: 40 + "-" + 70 + " (wild)",
        classification: "Fishes",
        family: "Lamnidae"
    },{
        id: 4,
        name: "Blue arrow frog",
        weight: 3 + " grams",
        measure: 3 + "-" + 4.5 + " cm",
        averageAge: 3 + "-" + 5 + " (wild), " + 7 + "-" + 8 + " (captivity)",
        classification: "Amphibians",
        family: "Dendrobates"
    }, {
        id: 5,
        name: "Leatherback turtle",
        weight: 600 + "-" + 1000 + " kg",
        measure: 2.3 + " meters",
        averageAge: 80 + " (wild)",
        classification: "Reptiles",
        family: "Dermochelyidae"
    }, {
        id: 6,
        name: "Orchid mantis",
        weight: 50 + " grams",
        measure: 2.5 + "-" + 3 + " cm(male), " + 6 + " cm(female)",
        averageAge: 8 + " months(female), " + 5 + "-" + 6 + " months(male)",
        classification: "Insects",
        family: "Hymenopodidae"
    }
];

//controllers
const showOneAnimal = (req, res) => {
    res.status(200).send(animals[1]);
    return;
}

const getAnimals = (req, res) => {
    res.status(200).send(animals);
    return;
}

const showAnimalById = (req, res) => {
    const animalId = req.params.id;
    for(var i = animalId; i < animals.length; i++){
        res.status(200).send(animals[i]);
        return;
    }
}

const showByClassification = (req, res) => {
    const animalClassification = req.params.classification;
    for(var i = 0; i < animals.length; i++){
        if(animals[i].classification == animalClassification){
            res.status(200).send(animals[i]);
            return;
        }
    }
}

//routes
api.get('/animals', getAnimals);
api.get('/animal', showOneAnimal);
api.get('/animal/:id', showAnimalById);
api.get('/classification/:classification', showByClassification);

//base routes
app.use('/api', api);

const port = 40000

app.listen(port, () => {
    console.log('Listening on http://localhost:' + port);
});

