const {insert_one, search_one_by, search_players, modify_player, delete_one_by}  = require('../database/mongo');

const create_player = async (insert_data) => {
    return await insert_one(insert_data)
}
const read_players = async () => {
    return await search_players()
}
const read_player = async (id) => {
    return await search_one_by(id)
}
const update_player = async (id, update_data) => {
    return Boolean(await modify_player(id, update_data))
}
const delete_player = async (id) => {
    return Boolean(await delete_one_by(id))

}

module.exports = {create_player, read_players, read_player, update_player, delete_player}