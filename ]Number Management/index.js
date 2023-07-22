// index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Sample data to simulate the number management (Replace this with a database in a real-world scenario)
let numbers = [
  { id: 1, number: '1234567890' },
  { id: 2, number: '9876543210' },
];

// Routes
app.get('/api/numbers', (req, res) => {
  res.json(numbers);
});

app.post('/api/numbers', (req, res) => {
  const { number } = req.body;
  if (!number) {
    return res.status(400).json({ error: 'Number is required.' });
  }

  const newNumber = {
    id: numbers.length + 1,
    number,
  };

  numbers.push(newNumber);
  res.status(201).json(newNumber);
});

app.put('/api/numbers/:id', (req, res) => {
  const { id } = req.params;
  const { number } = req.body;

  const numberToUpdate = numbers.find((n) => n.id === parseInt(id));
  if (!numberToUpdate) {
    return res.status(404).json({ error: 'Number not found.' });
  }

  numberToUpdate.number = number;
  res.json(numberToUpdate);
});

app.delete('/api/numbers/:id', (req, res) => {
  const { id } = req.params;

  const index = numbers.findIndex((n) => n.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ error: 'Number not found.' });
  }

  numbers.splice(index, 1);
  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
