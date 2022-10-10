const express = require('express');
const router = express.Router();

const db = [];

router.post('/pop', (req, res) => {
    req.body.arr.forEach((element) => {
        let x = db.length;
        const data = {
            key: x,
            name: element.name,
        };
        db.push(data);
    });
    res.status(201).send();
});

router.get('/', (req, res) => {
    res.send(db);
});

router.post('/', (req, res) => {
    if (req.body.hasOwnProperty('name')) {
        let x = db.length;
        const data = {
            key: x,
            name: req.body.name,
        };
        db.push(data);
        res.status(201).send(data);
    } else {
        res.status(404).send({ error: 'values not found' });
    }
});

router.get('/:id', (req, res) => {
    const id = req.params.id;

    let index = db.findIndex((animal) => animal.key === +id);
    console.log(index);
    if (index < 0) {
        res.status(404).send({ error: 'id not found in database' });
    } else {
        res.send(db[index]);
    }
});

router.patch('/:id', (req, res) => {
    const id = req.params.id;
    const name = req.body.name;

    let index = db.findIndex((animal) => animal.key === +id);

    if (index < 0) {
        res.status(404).send({ error: 'id not found in database' });
    } else {
        db[index].name = name;
        res.send(db[index]);
    }
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    let index = db.findIndex((animal) => animal.key === +id);

    if (index < 0) {
        res.status(404).send({ error: 'id not found in database' });
    } else {
        let removed = db.splice(index, 1);
        res.send(removed);
    }
});

module.exports = router;
