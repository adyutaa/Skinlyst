import mongoose from "mongoose";
import express from "express";
import cors from "cors";
<<<<<<< HEAD
import userRoute from "./routes/userRoute.js";
=======
>>>>>>> 76f8497c6e7e0389cd7434f878802759903c087c


const app = express();
mongoose.connect("mongodb://localhost:27017/fullstack_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to database"));

app.use(cors());
app.use(express.json());
app.use(userRoute);

app.listen(4000, () => {
    console.log("Server running on port 4000");
});

