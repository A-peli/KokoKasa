//TASK 1 - Routes & database with MongoDB Atlas
// exports
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = 3000;

//middlewaret
app.use(bodyParser.json());

//mongoDB (USING .env for safety)
mongoose.connect(process.env.MONGODB_URI, {
});


//TASK 2 - Mongoose schema
//TASK 3 - done in POSTMAN, all routes working with error handling
//TASK 4 - Error handling in in each route with approriate HTTP status codes
//schema for database
const kiekkoSchema = new mongoose.Schema({
    nimi: { type: String, required: true},
    valmistaja: { type: String, required: true}
});

const Kiekko = mongoose.model('kiekko', kiekkoSchema, 'kiekot');


// routes
app.get('/api/getall', async (req, res) => {
    try {
        const items = await Kiekko.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/api/:id', async (req, res) => {
    try {
        const item = await Kiekko.findById(req.params.id);
        if (!item) return res.status(404).json({ message: 'Item not found' });
        res.status(200).json(item);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
     });
    
app.post('/api/add', async (req, res) => {
try {
    const newItem = new Kiekko(req.body);
    await newItem.save();
    res.status(201).json(newItem);
} catch (error) {
    res.status(400).json({ message: error.message });
}
});
    
app.put('/api/update/:id', async (req, res) => {
try {
    const updatedItem = await Kiekko.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedItem) return res.status(404).json({ message: 'Item not found' });
    res.status(200).json(updatedItem);
} catch (error) {
    res.status(400).json({ message: error.message });
}
});
    
app.delete('/api/delete/:id', async (req, res) => {
try {
    const deletedItem = await Kiekko.findByIdAndDelete(req.params.id);
    if (!deletedItem) return res.status(404).json({ message: 'Item not found' });
    res.status(200).json({ message: 'Item deleted successfully' });
} catch (error) {
    res.status(500).json({ message: error.message });
}
});
//end of routes

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });
    