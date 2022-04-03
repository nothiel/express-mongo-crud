const Joi = require('joi')

const playerInSchema = Joi.object({
    nickname: Joi.string().required().min(3).max(30),
    vocation: Joi.string().required().min(5),
    level: Joi.number().required()
})

const playerModifySchema = Joi.object({
    nickname: Joi.string().min(3).max(30),
    vocation: Joi.string().min(5),
    level: Joi.number()
}).min(1)


module.exports = {playerInSchema, playerModifySchema};