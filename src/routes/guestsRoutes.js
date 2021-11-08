const express = require('express');
const router = express.Router();
const { viewAllGuests, createGuest, viewGuest } = require('../controllers/guestsControllers');

//GET ROUTE TO VIEW ALL GUESTS
router.get('/view', viewAllGuests);
//GET ROUTE TO VIEW GUESTS ENTRY BY PARAMS
router.get('/view/guests', );
//GET ROUTE TO VIEW ONE GUEST ENTRY 
router.get('/view/one', viewGuest)
//POST ROUTE TO CREATE A NEW GUEST ENTRY
router.post('/add', createGuest);
// UPDATE ROUTE TO UPDATE A GUEST ENTRY
router.put('/update/:id',);
// DELETE ROUTE TO DELETE A GUEST ENTRY
router.delete('/delete/:id',)


module.exports = router;