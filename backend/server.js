import * as dotenv from "dotenv" // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import express from "express"
import cors from "cors"
import data from "./models/data.js"
const app = express()
app.use(cors())
const port = process.env.PORT | 5001

app.get("/api/products", async (req, res) => {
try {
res.send(data.products)
console.log("data =", data.products)
} catch (error) {
console.log(error)
}
});

app.get("/api/products/slug/:slug", (req, res) => {
    const product = data.products.find(x => x.slug === req.params.slug);
    if (product) {
        res.send(product);
    }else{
        res.status(404).send({ message: 'product Tidak ada'});
    }
});

app.listen(port, () => console.log(`app listen on port ${port})`))