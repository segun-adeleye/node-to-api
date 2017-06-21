const mongoose = require('mongoose');

// Creating a mongoose model
var Todo = mongoose.model('Todo', {
  text: {
    type: 'String',
    required: true
  },
  completed: {
    type: 'Boolean',
    default: false
  },
  completedAt: {
    type: 'Number',
    default: null
  }
});

// let todo = new Todo({
//   text: 'Building something awesome!!!'
// });
//
// //saves to collection. returns a Promise
//
// todo.save().then((doc) => {
//   console.log('Saved', doc)
// }, (err) => {
//   console.log('Can\'t save at the moment', err);
// });

module.exports = {Todo};
