import express from 'express';
import cors from 'cors';
import potions from '../data/potions.js';

const app = express();

app.use(cors());

app.get('/', (req, res) => {

  res.send('Hello Worlds!');
});

app.get('/api/potions', (req, res) => {
  res.json(potions);
});

app.get('/api/potions/1', (req, res) => {
  res.json(potions[0]);
});

export default app;