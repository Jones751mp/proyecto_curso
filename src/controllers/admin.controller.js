import { pool } from '../config/mysql.connection.js'
import auth from '../lib/auth.js'
export const admin = {}


admin.index =async(req,res)=>{
    const user = auth.existsUser(req)
    const [users] = await pool.query("SELECT id,nombre,apellido,id_tipo FROM usuarios")
    console.log(users)

    res.render("admin/index",{users,user})
}

admin.edit = async(req,res) => {
    const { id } = req.params;
    const [ [  user  ] ] = await pool.query("CALL getUser(?);",[parseInt(id)]);

    res.render("admin/edit",{user});
}

admin.updateUser = async(req,res) => {
    const { id } = req.params;
    const {nombre,apellido,email,telefono} = req.body;

    const update = {
        nombre,apellido,email,telefono
    }

    await pool.query("UPDATE usuarios SET ? WHERE id = ?",[update,id])
    res.redirect("/admin")
}