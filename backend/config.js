const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    port: process.env.PORT ,
    host: process.env.HOST,
    database: {
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USERNAME ,
        password: process.env.DATABASE_PASSWORD ,
        db: process.env.DATABASE_NAME ,
    },
    mail: {
        mail_id: process.env.EMAIL,
        mail_password: process.env.EMAIL_PASSWORD
    }
};

