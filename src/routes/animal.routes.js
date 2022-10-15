const express = require('express');
const router = express.Router();
const { Animal } = require('./../models');

router.get('/', async (req, res) => {
    let all = await Animal.find();
    res.send(all);
});

router.post('/', async (req, res) => {
    if (req.body.hasOwnProperty('name') && req.body.hasOwnProperty('weight')) {
        try {
            let animal = await Animal.create(req.body);
            res.status(201).send(animal);
        } catch (e) {
            res.status(400).send(e);
        }
    } else {
        res.status(404).send({ error: 'values not found' });
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;

    let animal = await Animal.findById(id);
    if (animal) {
        res.send(animal);
        return;
    }
    res.send('not found');
});

router.patch('/:id', async (req, res) => {
    const id = req.params.id;

    let animal = await Animal.findById(id);

    if (!animal) {
        res.status(404).send('id not found');
        return;
    }
    if (req.body.name) animal.name = req.body.name;

    if (req.body.weight) animal.weight = req.body.weight;

    try {
        await animal.save();
        res.send(animal);
    } catch (e) {
        res.send(e);
    }
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        let deleted = await Animal.findByIdAndDelete(id);
        res.send(deleted);
    } catch (e) {
        res.status(404).send({ error: 'id not found in database' });
    }
});

module.exports = router;
