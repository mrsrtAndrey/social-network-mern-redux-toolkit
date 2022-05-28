const {verifyToken} = require('../middleware/authMiddleware')
const User = require('../models/User')

const express = require('express');
const router = express.Router();

// GET user/all - Получить все
router.get('/all', verifyToken, (req, res) => {
   User.find()
    .then(user =>{
      res.json(user)
    })
    .catch(err => {
      res.status(404).json({ nobooksfound: 'Пользователи не найдены' })});
});


// GET user/:id - Получить все
router.get('/:id', verifyToken, (req, res) => {

  User.findById(req.params.id)
    .then(user => {
      res.json(user)
    })
    .catch(err => res.status(404).json({ nobookfound: 'Пользователь не найден' }));
});

module.exports = router