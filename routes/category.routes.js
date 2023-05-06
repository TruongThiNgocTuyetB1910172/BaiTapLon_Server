const express = require("express");
const router = express.Router();
const API = require("../controllers/category.controller");
const multer = require("multer");

//middleware
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
  },
});

let upload = multer({
  storage: storage,
}).single("image");

router.get("/", API.fetchAllCategory);
router.get("/:id", API.fetchCategoryByID);
router.post("/", upload, API.createCategory);
// router.patch("/:id", upload, API.updateCategory);
router.delete("/:id", API.deleteCategory);

module.exports = router;
