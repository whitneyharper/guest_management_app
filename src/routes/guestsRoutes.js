const express = require('express');
const router = express.Router();
const { viewAllGuests, createGuest, viewGuest, updateGuest, deleteGuest } = require('../controllers/guestsControllers');

//GET ROUTE TO VIEW ALL GUESTS
router.get('/', viewAllGuests);
//GET ROUTE TO VIEW ONE GUEST ENTRY BY QUERY
router.get('/:id', viewGuest)
//POST ROUTE TO CREATE A NEW GUEST ENTRY
router.post('/', createGuest);
// UPDATE ROUTE TO UPDATE A GUEST ENTRY
router.put('/:id', updateGuest);
// DELETE ROUTE TO DELETE A GUEST ENTRY
router.delete('/:id', deleteGuest)


module.exports = router;