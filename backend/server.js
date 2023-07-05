import dotenv from "dotenv" 
import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import data from "./models/data.js"
import seedRouter from "./routes/seedRoutes.js"
import productRouter from "./routes/productRoutes.js"
import userRouter from "./routes/userRoute.js"

dotenv.config()
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("connected to MongoDB")
}).catch((error) => {
    console.log(error.reason)
});

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

///////
app.get('/api/products/:id', (req, res) => {
    const product = data.products.find((x) => x._id === req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
});
  ////////

const port = process.env.PORT | 5001
app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message })
});

app.listen(port, () => console.log(`app listen on port ${port}`))