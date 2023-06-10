// import { pool } from '../config/mysql.connection.js'

export const platos = {};

const result = [
    {id:1,nombre:"arepas",precio:5}
]


platos.getPlatos = async(req,res)=>{

    // const result= await pool.query("SELECT * FROM platos");
    res.render("platos/index",{result})
}

platos.getPlatoById = async(req,res)=>{
    //destructuring
    const { id } = req.params
    // const [result] = await pool.query("SELECT * FROM platos WHERE id = ?",[id]);
    res.render("/platos/",{result});
}

platos.updatePlato = async(req,res) => {
    const { id } = req.params
    // await pool.query("UPDATE platos SET ? WHERE id = ?",[id]);
    res.json({response:"actualizado exitosamente"});
}
// el final de spiderman es ...
platos.deletePlatoById = async(req,res)=>{
    const id = req.params.id;
    // await pool.query("DELETE FROM platos WHERE id = ? ",[id]);
    res.redirect("/platos/").status(200);
}