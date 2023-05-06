

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
    products: [
      {
        type: ObjectId,
        ref: "product",
      },
    ],
  });
  
  module.exports = model("category", schema);
  