const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 5000;
const inventoryRoutes = require('./routes/inventoryRoutes');

const {mongoURI} = require('./config/keys');

mongoose
  .connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(res => console.log('Successfully connected to mongoDB!'))
  .catch(err => console.log(err));

const app = express();
app.use(express.json());
app.use(cors());

app.use('/inventory', inventoryRoutes);
// implement JWT TOKEN AUTH
//app.use('/auth', authRoutes);

app.listen(port, () => console.log(`Server started at port ${port}!`));
