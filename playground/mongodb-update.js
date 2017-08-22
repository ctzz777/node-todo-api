// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        console.log('Unable to connect to mongodb');
    }
    console.log('Connected to mongodb');

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('599bc1047c58f9db6054a984')
    }, {
        $set: {
            name: 'Ted'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });



    // db.close();
});