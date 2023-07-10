import mysql from "mysql2/promise";

export const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password:"cb300804",
    database: "restaurante"
})

try {
    await pool.getConnection();
    console.log("base de datos conectada");
} catch(err) {
    console.log(err)
}