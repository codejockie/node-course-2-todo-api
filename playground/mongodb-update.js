// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log(`Unable to connect to MongoDB server`);
    }
    console.log(`Connected to MongoDB server`);

    // db.collection('Todos').findOneAndUpdate({ _id: new ObjectID('5917e87ba34c0bcf7063508a') }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //         returnOriginal: false
    //     }).then(result => {
    //         console.log(result);
    //     });
    
    db.collection('Users').findOneAndUpdate({ _id: new ObjectID('5917dad12d68de0af44c866a') }, {
        $set: {
            name: 'Nnamdi'
        },
        $inc: {
            age: -1
        }
    }, {
            returnOriginal: false
        }).then(result => {
            console.log(result);
        });

    // db.close();
});