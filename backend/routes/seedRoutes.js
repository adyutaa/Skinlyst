import express from 'express';
import Product from '../models/productModels.js';
import data from '../models/data.js';
import User from '../models/userModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
    await Product.deleteMany({});
    const createdProducts = await Product.insertMany(data.products);
    await User.deleteMany({});
    const createdUsers = await User.insertMany(data.user);
    res.send({ createdProducts, createdUsers });
  });
  export default seedRouter;