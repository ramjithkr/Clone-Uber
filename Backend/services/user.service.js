const userModel = require('../src/models/user.model')


module.exports.createUse = async({
    firstname,lastname,email,password
})=>{
    if(!firstname||!email||!password){
        throw new Error('All fields are required')
    }
    const user = userModel.create({
        firstname:{
            firstname,
            lastname,
        },
        email,
        password,
    })
    return user
}