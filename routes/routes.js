const express = require("express");
const API = require("../controllers/api")
const router = express.Router();
const multer = require('multer');

// multer middlware
let storage = multer.diskStorage({
    destination: function(req,file, cb ){
        cb(null, './uploads');
    },
    filename:function(req, file,cb){
        cb(null, file.fieldname+ "_" + +Date.now() + "_" + file.originalname);
    },
});
let upload = multer({
    storage: storage,
}).single("img")

// router.get("/",(req, res)=>{
//     res.send("Hello World");
// });
router.get("/", API.fetchAllPost);
router.get("/:id", API.FetchPostById);
router.post("/",upload,API.createPost);
router.patch("/:id", upload ,API.updatePost);
router.delete("/:id", API.deletePost);

module.exports = router;