// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDb server', err);
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('59a56f40d5d05449820f38f4')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then ((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').findOneAndUpdate({name: 'Tom'}, {
  //   $set: {
  //     name: 'Benedek'
  //   }
  // }, {
  //   returnOriginal: 'Tom'
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({name: 'Benedek'}, {
    $set: {
      name: 'Benedek'
    },
    $inc: {
      age: 3
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});
