const express = require('express');
const multer = require("multer");
const router = express.Router();
const imgModel = require('../modals/user');

const MIME_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
};

const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        const isValid = MIME_TYPE_MAP[file.mimetype];
        let error = new Error("Invalid Mime Type");
        if (isValid) {
            error = null;
        }
        cb(error, "backend/images");
        cb(null, "backend/images");
    },

    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('_');
        const ext = MIME_TYPE_MAP[file.mimetype];
        cb(null, name + '-' + Date.now() + '.' + ext);
    }
});   

router.post("",multer(storage).single("image"),(req,res,next)=>{
    const url = req.protocol +'://'+ req.get('host');
const img = new imgModel({
    img:url +'/images'
});
post.save().then(result=>{
    res.status(201).json({
        message:'image added successfully',
        post:{
            img:result.img
        }
    });
})
})