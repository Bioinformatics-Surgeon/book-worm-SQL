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
        use_env_variable: process.env.JAWSDB_URL,
        dialect: 'mysql',
    },
};
