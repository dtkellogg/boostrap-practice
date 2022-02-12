const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json())
app.use(cors());

app.get('/', (req, res) => {
  res.send("JELLO")
})

const PORT = 5000

app.listen(() => {
  console.log(`Server is running on port ${PORT}`);
})