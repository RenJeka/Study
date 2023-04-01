const MongoClient = require('mongodb').MongoClient;

const _dbName = 'testJekaDB';
const _dbCollection = 'nodejs_lesson_6';
const mongoClient = new MongoClient('mongodb://localhost:27017/');

const db = mongoClient.db(_dbName);
const collection = db.collection(_dbCollection);

async function connectMongoDB() {
    try {
        await mongoClient.connect();
        console.log('You connected to mongoDB successfully');
    } catch (error) {
        console.log(error);
    }
}

async function closeMongoDBConnection() {
    await mongoClient.close();
    console.log('connection closed');
}

async function insertOne(data) {
    return await collection.insertOne(data);
}

async function getAllData() {
    return JSON.stringify(await collection.find().toArray());
}

module.exports = {
    connectMongoDB: connectMongoDB,
    closeMongoDBConnection: closeMongoDBConnection,
    insertOne: insertOne,
    getAllData: getAllData,
};
