const express = require("express");
const router = express.Router();
const API = require("../controllers/user");
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

router.get("/", API.fetchAllUser);
router.get("/:id", API.fetchUserByID);
router.post("/", upload, API.createUser);
router.patch("/:id", upload, API.updateUser);
router.delete("/:id", API.deleteUser);

module.exports = router;
