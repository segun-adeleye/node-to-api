const mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    type: 'String',
    required: true,
    minlength: 5,
    trim: true
  }
});

// let user = new User({
//   email: '     s'
// });
//
// user.save().then((doc) => {
//   console.log('Saved', doc);
// }, (err) => {
//   console.log('Not saved', err);
// });

module.exports = {User};
