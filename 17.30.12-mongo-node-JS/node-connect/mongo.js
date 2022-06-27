const {MongoClient} = require('mongodb');
async function main() {
    const uri = "mongodb://localhost";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        // await  listDatabases(client);
        const db = client.db('dor');
        const collection = db.collection('documents');
        const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
    } catch (e) {
        console.error(e);
    } finally {
        console.log(1)
        await client.close();
    }
}
async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
main()