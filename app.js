
require ('dotenv').config();
const express = require('express');
const mongoose  =require('mongoose');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("uploads"));

mongoose.connect(process.env.DB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useFindAndModify:true,
    useCreateIndex:true,
})
.then(()=> console.log("Connected DB"))
.catch((err)=> console.log(err));

app.use("/api/post", require("./routes/routes"));
app.use("/api/product", require("./routes/product.routes"));
app.use("/api/user", require("./routes/user.routes"));


app.listen(port, ()=> console.log(`Server running at http://localhost:${port}`));