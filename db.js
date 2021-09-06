var Pool = require("pg").Pool;

const pool = new Pool(
    {
        user: "postgres",
        password: "test",
        url: "localhost",
        port: 5433,
        database: "test"
    }

)

module.exports = pool;
