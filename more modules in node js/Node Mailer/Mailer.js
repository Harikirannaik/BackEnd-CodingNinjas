// import nodemailer
const nodemailer = require('nodemailer');

// configure email and send it
async function sendMail(){
    // create an email transporter
    // SMTP - simple mail transfer protocol
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: 'harikiran1252@gmail.com',
            pass: 'fyit qdgx cnof ysxu',
        }
    });

    // configure email content
    const mailoptions = {
        from: 'harikiran1252@gmail.com',
        to: 'hari.naik@innerscore.com',
        cc: 'harikiran1616@gmail.com',
        subject: 'Welcome to NodeJS',
        text: 'This is sample mail'
    };

    // Send the email
    try{
        const result = await transporter.sendMail(mailoptions);
        console.log('Email sent succesfully');
    }catch(error){
        console.log('email sending failed' + error);
    };
}

sendMail();