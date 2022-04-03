const {playerInSchema, playerModifySchema} = require('../model/players')
 

const insertMiddleware = (req, res, next) => {
    const {body} = req
    const { error } = playerInSchema.validate(body); 
    const valid = error == null; 
    if (valid) { 
        next(); 
    } else { 
        const { details } = error; 
        const message = details.map(i => i.message).join(',');

        console.log("error", message); 
        res.status(422).json({ error: message }) 
    }
  } 


const updateMiddleware = (req, res, next) => {
    const {body} = req
    const { error } = playerModifySchema.validate(body); 
    const valid = error == null; 
    if (valid) { 
        next(); 
    } else { 
        const { details } = error; 
        const message = details.map(i => i.message).join(',');

        console.log("error", message); 
        res.status(422).json({ error: message }) 
    }
} 


module.exports = {insertMiddleware, updateMiddleware};