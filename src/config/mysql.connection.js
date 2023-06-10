import mysql from "mysql2/promise";

export const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password:"",
    database: "restaurant"
}) //con quien nos conectamos

try {
    await pool.getConnection();
    console.log("base de datos conectada");
} catch(err) {
    console.log(err)
}