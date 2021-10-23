require("module-alias/register");
const express = require('express');
const connectDB = require('@config/db.js')
const dotenv = require('dotenv');
const path = require('path');
const indexRoute = require('@routes/index');

dotenv.config()

const app = express();

connectDB();

app.use(express.json());

app.use('/api', indexRoute)

const __dirnames = path.resolve()
if  (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirnames, '/build')))
  
    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirnames, 'build', 'index.html'))
    )
}
else {
    app.get('/', (req, res) => {
        res.send('API is running...');
    });
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server Started on Port Number ${PORT}`))