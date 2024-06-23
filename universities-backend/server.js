const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

app.get('/api/universities', async (req, res) => {
    const { country } = req.query;
    try {
        const response = await axios.get(`http://universities.hipolabs.com/search?country=${country}`);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: error.message,
            error: error.response?.data || 'An unexpected error occurred',
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});