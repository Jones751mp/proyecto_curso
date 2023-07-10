import { pool } from '../config/mysql.connection.js'
import auth from '../lib/auth.js';
export const platos = {};


platos.getPlatos = async(req,res)=>{
    const [result] = await pool.query("SELECT * FROM platos");
    const user = auth.existsUser(req)
    console.log(user)
    res.render("platos/index",{result,user})
}

platos.getPlatoById = async(req,res)=>{
    const { id } = req.params
    const user = auth.existsUser(req)

    const [result] = await pool.query("SELECT * FROM platos WHERE id = ?",[id]);
    res.render("platos/plato",{result,user});
}

platos.updatePlato = async(req,res) => {
    const { id } = req.params

    await pool.query("UPDATE platos SET ? WHERE id = ?",[id]);
    res.json({response:"actualizado exitosamente"});
}

platos.renderUpdatePlato = async(req,res) => {
    const { id } = req.params
    const user = auth.existsUser(req)

    const [plato] = await pool.query("SELECT * FROM platos WHERE id = ?",[id])
    res.render('platos/update',{platos,user})
}
platos.renderCreatePlato = async(req,res) =>{
    const [categorias] = await pool.query("SELECT * FROM categorias")
    const user = auth.existsUser(req)

    res.render("platos/create",{categorias,user})
}
platos.createPlato = async(req,res)=> {
    try {
        const {nombre,precio,id_categoria} = req.body
        const img = platos.image(req)
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


// platos.image = async(req)=>{
    
//     const savePublic = async()=>{
//         const imgUrl = helpers.randomNumber();
//         const images = await pool.query('SELECT * FROM platos WHERE image = ?', [imgUrl])
//         if(images > 0){
//             savePublic();
//         }else{
//             const imageTempPath = req.file.path
//             const ext = path.extname(req.file.originalname).toLowerCase()
//             const targetPath = path.resolve(`src/public/upload/${imgUrl}${ext}`)
//             if(ext === '.png'|| ext === '.jpg' || ext === '.jpeg' || ext === '.gif'){
//                 fs.moveSync(imageTempPath, targetPath);
//                 const newImage = imgUrl + ext
//                 const imageSaved = await pool.query('UPDATE platos SET image = ? WHERE id = ?', [newImage,req.id_plato])
//                 res.redirect('/profile')
//             } else{
//                 fs.unlinkSync(imageTempPath)
//                 res.status(500).json({error:'ese archivo no es una imagen'})
//             }
//         };
//     };
//     savePublic()
// }