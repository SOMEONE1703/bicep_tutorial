var express = require('express');
var router = express.Router();
const cars=[
  {id:1, make:'Toyota', model:'Camry', year:2020},
  {id:2, make:'Honda', model:'Accord', year:2019},
  {id:3, make:'Ford', model:'Mustang', year:2021}
];
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(cars);
});
router.get('/:id', function(req, res, next) {
    const car = cars.find(c => c.id === parseInt(req.params.id));
    if(car){
        res.json(car);
    }
    else{
        res.status(404).send({message:'Car not found'});
    }
});

router.post('/', function(req, res, next) {
    const newCar = {
        id: cars.length + 1,
        make: req.body.make,
        model: req.body.model,
        year: req.body.year
    };
    cars.push(newCar);
    res.status(201).json(newCar);
});

router.put('/:id', function(req, res, next) {
    const car = cars.find(c => c.id === parseInt(req.params.id));
    if(car){
        car.make = req.body.make;
        car.model = req.body.model;
        car.year = req.body.year;
        res.json(car);
    }
    else{
        res.status(404).send({message:'Car not found'});
    }
});

router.delete('/:id', function(req, res, next) {
    const carIndex = cars.findIndex(c => c.id === parseInt(req.params.id));
    if(carIndex !== -1){
        const deletedCar = cars.splice(carIndex, 1);
        res.json(deletedCar);
    }
    else{
        res.status(404).send({message:'Car not found'});
    }
});

router.patch('/:id', function(req, res, next) {
    const car = cars.find(c => c.id === parseInt(req.params.id));
    if(car){
        if(req.body.make) car.make = req.body.make;
        if(req.body.model) car.model = req.body.model;
        if(req.body.year) car.year = req.body.year;
        res.json(car);
    }
    else{
        res.status(404).send({message:'Car not found'});
    }
});


module.exports = router;
