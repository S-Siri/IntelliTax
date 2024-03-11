const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    gross: Number,
    base: Number,
    HRA: Number,
    Rent: Number,
    Dear_allowance: Number,
    LTA_received: Number,
    Total_amount_invested_under_section: Number,
    amt_under_section_80TTA:Number,
    amt_under_sec_80: Number,
    amt_under_sec_80g:Number,
    amt_under_sec_24_: Number,
    amt_under_sec_80ccd_1B: Number,
    amt_under_sec_80ccd_2: Number,
    amt_under_sec_80E: Number
})

const User = new mongoose.model("User",userSchema);

module.exports = User;