const Pool = require("pg").Pool;
const pool = new Pool({
    user: "admin",
    password: "admin",
    host: "postgres",
    port: 5432,
    database: "digital_portfolio"
});

module.exports = pool;