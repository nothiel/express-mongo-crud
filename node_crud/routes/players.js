const express = require('express');
const {create_player, read_players, read_player, update_player, delete_player} = require('../controller/players')
const {insertMiddleware, updateMiddleware} = require('../middlewares/player-middleware')
const player_router = express.Router()


player_router.get('/players', async (request, response)=> {
    let players = await read_players()
    response.send(players)
})

player_router.get('/player/:id', async (request, response)=> {
    const {params: {id}} = request
    let user = await read_player(id)

    response.send(user)
})

player_router.post('/players/', insertMiddleware,  async (request, response)=> {
    const {body} = request

    let id = await create_player(body)

    response.status(201).send({"Message": "User created", "id": String(id)})
})

player_router.put('/player/:id', updateMiddleware, async (request, response)=> {
    const {params: {id}} = request
    const {body} = request

    let modified = await update_player(id, body)

    if (modified) {
        response.send({"Message": "User Modified"})
    } else {
        response.status(404).send({"Error": "Player not found or modified data is the same"})
    }
})

player_router.delete('/player/:id', async (request, response)=> {
    const {params: {id}} = request

    const deleted = await delete_player(id)
    if (deleted) {
        response.send({"Message": "User Deleted"})
    } else {
        response.status(404).send({"Error": "Player not found"})
    }
})


module.exports = player_router