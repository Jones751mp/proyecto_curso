import auth from "../lib/auth.js"

export const user = {}


user.index = (req,res)=>{
    const user = auth.existsUser(req)
    console.log(user);
    res.render("user/index",{user})
}

user.logout = (req,res)=>{
    res.clearCookie('session');
    res.redirect("/");
}