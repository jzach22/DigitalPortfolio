const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    password: "511F675l",
    host: "172.31.48.1",
    port: 5432,
    database: "digital_portfolio"
});

module.exports = pool;