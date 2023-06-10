export const index = {}

index.home = (req,res)=> {
    res.render("index");
}

index.about = (req,res)=> {
    res.render("about");
}

index.contact = (req,res)=>{
    res.render("contact");
}
