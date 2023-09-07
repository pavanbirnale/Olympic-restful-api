const express =require("express");
const port = process.env.PORT || 3000;
const app =express();
app.use(express.json());
require("../src/db/conn")
const router = require("../src/routers/mens");
app.use(router);




app.listen(port,()=>{
    console.log(`connection at port no ${port}`);
})