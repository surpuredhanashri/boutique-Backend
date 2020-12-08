import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Product from "../models/productModel.js";

const productRouter = express.Router();

//api to sending list of product to frontend - /api/products/
productRouter.get(
	"/",
	expressAsyncHandler(async (req, res) => {
		const products = await Product.find({});
		res.send(products);
	})
);

// /seed to crate 6 product
productRouter.get(
	"/seed",
	expressAsyncHandler(async (req, res) => {
		// await Product.remove({});
		const createdProducts = await Product.insertMany(data.products);
		res.send({ createdProducts });
	})
);

//detail prodct api
//for this api /seed trated as /id
productRouter.get(
	"/:id",
	expressAsyncHandler(async (req, res) => {
		const product = await Product.findById(req.params.id);
		if (product) {
			res.send(product);
		} else {
			res.status(404).send({ message: "Product Not Found" });
		}
	})
);

export default productRouter;
