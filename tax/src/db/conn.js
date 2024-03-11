const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://ssiri2409:siriponnu@rest.v7ukwfn.mongodb.net/?retryWrites=true&w=majority&appName=Rest").then(()=>{
    console.log(`connection successful`);
}).catch((e)=>{
    console.log(e);
})