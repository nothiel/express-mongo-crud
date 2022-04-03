const { MongoClient, ObjectId } = require('mongodb');

const uri = 'mongodb://root:MongoDB2019!@127.0.0.1:27017' // this is a test, do not use uris on your code directly :) at least put it on an .env file

const client = new MongoClient(uri);

const return_collection = async () => {
    try {
        connect = await client.connect();
        player_db = client.db("players")
        player_collection = player_db.collection("players");
        return player_collection
    } catch(err) {
        console.log(`Error while connecting to database: ${err}`)
    }
}
async function insert_one(insert_data) {
    try {
        coll = await return_collection()      
        new_player = await coll.insertOne(insert_data)
        
        return String(new_player.insertedId)
    } catch (err) {
        console.log(`Error while inserting on database: ${err}`)
    }
}

async function search_one_by(id) {
    try {
        coll = await return_collection()      
        player = await coll.findOne({'_id': ObjectId(id)})
        
        return player
    } catch (err) {
        console.log(`Error while reading on database: ${err}`)
    }
}

async function search_players() {
    try {
        coll = await return_collection()      
        player = await coll.find({}).toArray()
        
        return player
    } catch (err) {
        console.log(`Error while reading on database: ${err}`)
    }
}


async function modify_player(id, update_data) {
    try {
        coll = await return_collection()      

        modified = await coll.updateOne({'_id': ObjectId(id)}, {'$set': update_data})
        return modified.modifiedCount
    } catch (err) {
        console.log(`Error while reading on database: ${err}`)
    }
}


async function delete_one_by(id) {
    try {
        coll = await return_collection()      
        player = await coll.deleteOne({'_id': ObjectId(id)})
        return player.deletedCount
    } catch (err) {
        console.log(`Error while reading on database: ${err}`)
    }
}

module.exports = {insert_one, search_one_by, search_players, modify_player, delete_one_by};