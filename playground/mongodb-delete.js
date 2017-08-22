// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        console.log('Unable to connect to mongodb');
    }
    console.log('Connected to mongodb');

    // db.collection('Todos').deleteMany({text: 'Eat Luntch'})
    //     .then((result) => {
    //         console.log(result);
    //     });

    // db.collection('Todos').deleteOne({text: 'Eat Lunch'})
    //     .then((result) => {
    //         console.log(result);
    //     });

    // db.collection('Todos').findOneAndDelete({completed: false})
    // .then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({name: 'Ted'});

    db.collection('Users').findOneAndDelete({_id: new ObjectID('599bbeb57c58f9db6054a832')})
    .then((results) => {
        console.log(JSON.stringify(results, undefined, 2));
    });

    // db.close();
});