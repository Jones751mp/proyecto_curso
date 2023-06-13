import { pool } from '../config/mysql.connection.js'

export const platos = {};


platos.getPlatos = async(req,res)=>{
    const [result] = await pool.query("SELECT * FROM platos");
    res.render("platos/index",{result})
}

platos.getPlatoById = async(req,res)=>{
    const { id } = req.params
    const [result] = await pool.query("SELECT * FROM platos WHERE id = ?",[id]);
    res.render("/platos/",{result});
}

platos.updatePlato = async(req,res) => {
    const { id } = req.params
    await pool.query("UPDATE platos SET ? WHERE id = ?",[id]);
    res.json({response:"actualizado exitosamente"});
}

platos.renderUpdatePlato = async(req,res) => {
    const { id } = req.params
    const [plato] = await pool.query("SELECT * FROM platos WHERE id = ?",[id])
    res.render('platos/update',{platos})
}
platos.renderCreatePlato = async(req,res) =>{
    const [categorias] = await pool.query("SELECT * FROM categorias")
    res.render("platos/create",{categorias})
}
platos.createPlato = async(req,res)=> {
    try {
        const {nombre,precio,id_categoria} = req.body
        const newProduct = {
            nombre,
            precio:parseInt(precio),
            id_categoria:parseInt(id_categoria)
        }
        await pool.query("INSERT INTO platos SET ?",[newProduct]);
        res.redirect("/platos/")
    } catch(err) {
        console.error(err)
    }
}
// el final de spiderman es ...
platos.deletePlatoById = async(req,res)=>{
    const id = req.params.id;
    await pool.query("DELETE FROM platos WHERE id = ? ",[id]);
    res.json({message:"eliminado exitosamente"}).status(200);
}