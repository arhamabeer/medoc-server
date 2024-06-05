const _saltModel = require('../models/salts')

const AddSalt = async (req,res)=>{
    let _checkSalt = await _saltModel.findOne({name: req.body.name.toLowerCase()})
    if(_check)
}