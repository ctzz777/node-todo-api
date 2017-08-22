// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var user = {
    name: 'Ted',
    age: 24
};
var {name} = user;
console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        console.log('Unable to connect to mongodb');
    }
    console.log('Connected to mongodb');

    // db.collection('Todos').find({
    //     _id: new ObjectID('599b14ca834aaac918eb83e0')
    // }).toArray()
    //     .then((docs) => {
    //         console.log('Todos');
    //         console.log(JSON.stringify(docs, undefined, 2));
    //     }, (err) => {
    //         console.log('Unable to fetch todos', err);
    //     });
    // db.collection('Todos').find().count()
    //     .then((count) => {
    //         console.log('Todos');
    //         console.log(`Todos counts: ${count}`);
    //     }, (err) => {
    //         console.log('Unable to fetch todos', err);
    //     });

    db.collection('Users').find({
        name: 'Ted'
    })
    .toArray()
    .then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    });

    // db.close();
});