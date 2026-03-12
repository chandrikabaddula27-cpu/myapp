const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello from my CI/CD pipeline!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});console.log('CI/CD test');
