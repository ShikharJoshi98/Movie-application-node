require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { movieRoute, theatreRoute } = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/mba', movieRoute);
app.use('/api/mba', theatreRoute);

app.get('/test', (req, res) => {
    res.send('Test Api');
})

app.listen(PORT,async () => {
    console.log(`Server started on port ${PORT}`);
    
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Successfully connected to the MongoDB');
    } catch (error) {
        console.log('Not Able connect to the MongoDB', error);
    }
})