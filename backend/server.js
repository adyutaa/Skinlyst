import express from 'express';
import data from './models/data.js';
const app = express();

app.get('/api/products', (req, res) => {
    res.send(data);
});


const port =  process.env.PORT || 5001;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});

