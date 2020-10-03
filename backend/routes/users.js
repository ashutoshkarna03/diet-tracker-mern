const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json({
        "success": true,
        "data": users
    }))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({
      username: username
  });

  newUser.save()
    .then(() => res.json({
        "success": true,
        "message": 'User added!'
    }))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;