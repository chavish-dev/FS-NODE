const express = require("express")
const router = express.Router()
const User = require("../models/users");
const {addUser,getAllUsers,updateUser,deleteUser,getUserByName} = require("../controllers/Users");

router.post('/', addUser);
router.delete('/:userId', deleteUser);
router.get('/', getAllUsers);
router.put('/:userId', updateUser);
router.get('/:name', getUserByName);
router.get('/:name', getUserByName);



module.exports = router