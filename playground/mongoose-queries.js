const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

var userId = '59a67480fd2eb7f81a96b30b';

if(!ObjectID.isValid(userId)){
  console.log('ID not valid');
}
// var id = '59a6b4a70fdfa8f82791ddd1';
//
// if(!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }


// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

User.findById(userId).then((user) => {
  if(!user) {
    return console.log('Id not found');
  }
  console.log('User by ID ', user);
}).catch((e) => console.log(e));
