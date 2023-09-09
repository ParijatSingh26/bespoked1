const mongoose = require("mongoose");
const productScheme = new mongoose.Schema({
	description: String,
	productName: String,
    price : Number,
	images: [String],
	updatedAt: {
		type: Date,
		default: () => new Date(),
	},
	createdAt: {
		type: Date,
		immutable: true,
		default: () => new Date(),
	},
});
module.exports = mongoose.model("product", productScheme);
