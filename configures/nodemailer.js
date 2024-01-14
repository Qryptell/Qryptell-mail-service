import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()

let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    secure:true,
    logger:true,
    debug:false,
    secureConnection:true,
    auth: {
        user: process.env.SENDER_MAIL,
        pass: process.env.SENDER_PASS,
    },
    tls:{
        rejectUnauthorized:true
    }
});

export default mailTransporter;