import mailer from './configures/nodemailer.js'
import dotenv from 'dotenv'
dotenv.config()

const sendMail = (email,otp)=>{
    const mailDetails = {
        from: process.env.SENDER_MAIL,
        to: email,
        subject: 'Email Verification Code from LunarLoom',
        html: `<div style="border:solid white 1px">   
        <h1 style="text-align:center;color:purple;padding-top:1rem">LunarLoom Email Verification</h1>
        <p style="margin:1rem">Hi<br/>We received a request to verify your email <span style="color:blue">${email}</span>.your email verification code is:</p>
        <h2 style="text-align:center;font-size:30px;font-weight:700">${otp}</h2>
        <p style="margin:1rem">if you dod not request this code,it is possible that someone else is trying to register your email <span style="color:blue">${email}</span> LunarLoom.Do not forward or give this code to anyone.</p>
        <p style="margin:1rem">sincerely yours,</p>
        <p style="margin-left:1rem">LunarLoom team</p>
      </div>`
    };
    
    mailer.sendMail(mailDetails, function (err, data) {
        if (err) {
            console.log('Error Occurs -',email);
        } else {
            console.log('Email sent successfully',email);
        }
    });
}

export default sendMail