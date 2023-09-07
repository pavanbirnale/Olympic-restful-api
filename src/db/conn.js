const mongoose= require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/olympics").then(()=>{
    console.log("connection successful...");
}).catch((e)=>{
    console.log(`${e}: No connection something went wrong `);
});


