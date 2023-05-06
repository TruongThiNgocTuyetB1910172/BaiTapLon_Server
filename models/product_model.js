

const {
    model,
    Schema,
    Schema: {
      Types: { ObjectId },
    },
  } = require("mongoose");
  
  const schema = new Schema({
    name: {
      type: String,
      default: "",
    },
    detail: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      default: "",
    },
    qty: {
      type: Number,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      ref: "category",
    },
  });
  
  module.exports = model("product", schema);
  