import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";
import bodyParser from "body-parser";
import cors from "cors";
import orderRouter from "./routers/orderRouter.js";

dotenv.config();


const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(cors());

mongoose
	.connect(
		process.env.MONGODB_URL ||`mongodb+srv://mongodb:dhanashri@cluster0.qdytt.mongodb.net/ecommerce?retryWrites=true&w=majority`,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		}
	)
	.then(() => console.log("Connected to DB"))
	.catch((err) => console.log(err));

//used userRouter
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);

//created api to send paypal client id to frontend
app.get("/api/config/paypal", (req, res) => {
	res.send(process.env.PAYPAL_CLIENT_ID || "sb");
});

app.get("/", (req, res) => {
	res.send("Server is ready");
});

//all errors will redirect to this middelewere and write error and send back to frontend
app.use((err, req, res, next) => {
	res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Serve at http://localhost:${port}`);
});
