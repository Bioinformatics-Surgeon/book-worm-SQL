module.exports = {
    development: {
        username: 'root',
        password: null,
        database: 'book_worm_db',
        host: '127.0.0.1',
        port: 3306,
        dialect: 'mysql',
    },
    production: {
        username: process.env.USERNAME,
        password: process.env.HOST,
        database: process.env.DATABASE,
        host: process.env.HOST,
        port: 3306,
        dialect: 'mysql',
    },
};