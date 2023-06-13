import auth from "../lib/auth.js";
export const index = {}



index.home = (req,res)=> {
    const user = auth.existsUser(req)
    res.render("index",{user});
}

index.about = (req,res)=> {
    const user = auth.existsUser(req)

    res.render("about",{user});
}

index.contact = (req,res)=>{
    const user = auth.existsUser(req)
    res.render("contact",{user});
}
