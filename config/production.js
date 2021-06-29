const fs = require('fs');

module.exports = {
  frontEnd: { host: '' },
  connection: {
    host: '0.0.0.0',
    port: process.env.PORT || 80,
    tls: {
      key: '',
      cert: '',
    }
  },
  joi: {
    allowUnknown: false,
    abortEarly: false
  },
  database: {
    database: '',
    username: 'root',
    password: '',
    host: '0.0.0.0',
    port: 3306,
    dialect: 'mysql',
    debug: false,
    sync: false
  },
  jwt: {
    TokenTtl: '1d',
    stayLoggedInTokenTtl: '30d',
    authKey: 'o12omucSlk7maWgbsAzSuG6eDlrPjpRb'
  },
  mailing: {
    host: 'mail.ucx.zone',
    port: 465,
    secure: true, // true for 465, false for other ports
    from: '',
    subjects: { activationMail: 'Activation Mail' },
    auth: {
      user: '', // generated ethereal user
      pass: ')' // generated ethereal password
    }
  },
};
