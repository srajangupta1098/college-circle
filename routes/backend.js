var express = require('express');
var router = express.Router();

var nodemailer=require('nodemailer');

const nodemailer=()=>{
    var mail=req.body.email;
    var transporter=nodemailer.createTransport({
        service: 'gmail',
        secure:false,
    auth: {
        user: 'thedailyofferjuet@gmail.com',
        pass: 'cpcolony@128'
    }
    });

    let mailOptions ={
        from :'s22ubbu@gmail.com',
        to:mail,
        subject:'mail for authentication at college circle',
        text:msg
    };
    transporter.sendMail(mailOptions,function(error,result){
        if(error)
        {
            console.log(error)
            return res.status(500).json({RESULT:false})
        }
        else{
            console.log('Email send')
            return res.status(200).json({RESULT:true});
        }
    })
}
