const models = require('../models');

async function signIn(req, res){
    const user = await models.Users.findOne({
       where: {
           email: req.body.email,
       }
    });
    return res.status(200).send({success:true, user });
}

async function signUp(req,res){
    await models.Users.create(req.body);
    return res.status(200).send({success:true, mag:'singup ashxatanq'});
}

module.exports= {
    signUp,
    signIn,
};