require('dotenv').config({path: './config.env'});

console.log('DATABASE_URL:', process.env.DATABASE_URL);

const express = require('express');
const mongoose = require('mongoose');
const loanRoutes = require('./routes/loanRoutes')
const loanLedgerRoutes = require('./routes/loanLedgerRoutes')
const customerRoutes = require('./routes/customerRoutes')

// Use the necessary options when connecting to MongoDB
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const database = mongoose.connection;

// Handle MongoDB connection errors
database.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

database.once('connected', () => {
  console.log('Database Connected');
});

const app = express();

app.use(express.json());

// Mounting loanRoutes here
app.use('/loan', loanRoutes);
app.use('/loanLedger', loanLedgerRoutes)
app.use('/customer', customerRoutes)

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});
