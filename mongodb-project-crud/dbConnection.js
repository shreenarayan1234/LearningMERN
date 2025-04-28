const { MongoClient } = require('mongodb');


let dbConnectionUrl= `mongodb://127.0.0.1:27017`

const client = new MongoClient(dbConnectionUrl);

let dbConnection = async () =>{
    try {
        await client.connect();
        let db  = client.db('mongoDBProject_Database')
        return db;
    } catch (error) {
        console.error("Failed to connect to the database:", error);
        throw error;
    }
}

module.exports={dbConnection}