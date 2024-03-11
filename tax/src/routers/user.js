const express = require("express");
const router = express.Router();
const User = require("../models/user");
const mongoose= require("mongoose");

router.get('/',(req,res,next)=>{
    User.find()
    .then(result=>{
        res.status(200).json({
            userData:result
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    });
})

router.get("/:id",(req,res,next)=>{
    console.log(req.params.id);
    User.findById(req.params.id)
    .then(result=>{
        res.status(200).json({
            user:result
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    });
})

router.delete("/:id",(req,res,next)=>{
    User.delete({_id:req.params.id})
    .then(result=>{
        res.status(200).json({
            msg:"deleted user",
            user:result
        })
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
})

router.post('/',(req,res,next)=>{
    const user = new User({
        _id:new mongoose.Types.ObjectId,
        gross: req.body.gross,
        base: req.body.base,
        HRA: req.body.HRA,
        Rent: req.body.Rent,
        Dear_allowance: req.body.Dear_allowance,
        LTA_received: req.body.LTA_received,
        Total_amount_invested_under_section: req.body.Total_amount_invested_under_section,
        amt_under_section_80TTA:req.body.amt_under_section_80TTA,
        amt_under_sec_80: req.body.amt_under_sec_80,
        amt_under_sec_80g:req.body.amt_under_sec_80g,
        amt_under_sec_24_: req.body.amt_under_sec_24_,
        amt_under_sec_80ccd_1B: req.body.amt_under_sec_80ccd_1B,
        amt_under_sec_80ccd_2: req.body.amt_under_sec_80ccd_2,
        amt_under_sec_80E: req.body.amt_under_sec_80E
    })

    user.save()
    .then(result=>{
        console.log(result);
        res.status(200).json({
            newStudent:result
        })
    })

    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})

module.exports = router;