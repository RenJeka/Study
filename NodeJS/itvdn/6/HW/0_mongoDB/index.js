const MongoClient = require('mongodb').MongoClient;

const _dbName = 'testJekaDB';
const _dbCollection = 'testCollectionJekaDB';
const mongoClient = new MongoClient('mongodb://localhost:27017/');
const testData = {firstName: 'Jeka', lastName: 'Good', age: 27};

async function runMongoClient() {
    try {

        await mongoClient.connect();
        console.log('Connection successful!');
        const db = mongoClient.db(_dbName);
        const collection = db.collection(_dbCollection);
        const insertResult = await collection.insertOne(testData);
        console.log('insertResult: ', insertResult);
        console.log('find: ', await collection.find().toArray());

    } catch (error) {
        console.log(err);

    } finally {
        await mongoClient.close();
        console.log('Connection closed!');
    }
}

runMongoClient().catch(console.log);
