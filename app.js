require ('dotenv').config()
const cors = require('cors');
const mongoose = require('mongoose')
require('express-async-errors')
const express = require('express');

const app = express();
app.use(cors());
const connectDB = require('./db/connect');
const docRouter = require('./routes/products')
// const productsRouter = require('./routes/products');

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

// middleware
app.use(express.json());

app.use('/doc',docRouter)
app.use('/',(req,res)=>{
    res.send("<h1>Fake doctor data</h1>")
})


app.use(notFoundMiddleware)
app.use(errorMiddleware)


const port = process.env.PORT || 6001;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
}).then(() => {
  app.listen(port, () => console.log(`Server Port: ${port}`)); // Fix: use `port` instead of `PORT`
  // User.insertMany(users);
  // Posts.insertMany(posts);
}).catch((error) => console.log(`${error} did not connect`));
