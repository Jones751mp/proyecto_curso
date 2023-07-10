import mysql from "mysql2/promise";

export const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "restaurante"
})

try {
    await pool.getConnection();
    console.log("base de datos conectada");
} catch(err) {
    console.log(err)
}