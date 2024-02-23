const mongoose = require('mongoose');
const mongoConnection='mongodb+srv://dbakalov:GW40QUxsOcyLzsY7@djangoapp.cpm7frk.mongodb.net/Chatbot?retryWrites=true&w=majority&appName=djangoApp'
mongoose.connect(mongoConnection);
const dbConnection = mongoose.connection;

dbConnection.on('error', () => console.error('MongoDB connection error:'));

dbConnection.once('open', () => console.log('Connected to MongoDB'));

module.exports = mongoose;