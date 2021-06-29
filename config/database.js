module.exports = {
  database: 'nodemysql',
  username: 'root',
  password: 'ahmed123',
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  debug: true,
  sync: false,
  pool: {
    max: 2,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
