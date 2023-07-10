import bcrypt from 'bcrypt'
const helpers = {}

helpers.encryptPassword = async(password)=>{
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt);

    return hash;
}

helpers.matchPassword = async(password,savedPassword)=>{
    try {
        return await bcrypt.compare(password,savedPassword)
    }catch( err ) {
        console.error(err)
    }
}



helpers.randomNumber = () =>{
    const posible = 'abcdefghijklmnopqrstuwxyz0123456789'
    let randomNumber = 0;
    for(let i = 0;i <6; i++){
        randomNumber += posible.charAt(Math.floor(Math.random() * posible.length))
    }
    return randomNumber
}

export default helpers;