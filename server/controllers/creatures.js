/* eslint-disable new-cap, no-underscore-dangle */

import express from 'express';
import Creature from '../models/creature';
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  Creature.find((err, creatures) => res.send({ creatures }));
});

router.get('/:id/get', (req, res) => {
  const id = req.params.id;
  Creature.findById(id, (err, creature) => res.send({ creature }));
});

router.post('/', (req, res) => {
  const creature = new Creature(req.body);
  console.log('new creature', creature);
  creature.save(() => {
    res.send();
  });
});
