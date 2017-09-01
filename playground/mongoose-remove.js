const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove
//
Todo.findOneAndRemove({_id: '59a91c23c22f5ab847807d14'}).then((todo) => {

});

Todo.findByIdAndRemove('59a91c23c22f5ab847807d14').then((todo) => {
  console.log(todo);
});
