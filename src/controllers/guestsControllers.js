//const Sequelize = require('sequelize');
const { models } = require('../databases/database');
const db = require('../databases/database');
const { Guest } = db.models;
const {Op} = db.sequelize;

// FUNCTION TO VIEW ALL GUESTS
exports.viewAllGuests = async(req, res) => {
    try { const guests = await Guest.findAll()
        return res.status(200).json({guests});    
    } catch(err) {
        console.log(err);
        return res.status(500).json({message: 'Something went wrong. Please try again later'});
    }
};

//FUNCTION TO VIEW SINGLE ENTRY BY ID
exports.viewGuest = async(req, res) => {
    try{
        const guest = await Guest.findOne({
            where: {
                id: req.params.id,  
            }
        });
        if(!guest) {
            return res.status(404).json({message: 'Guest not found'});
        }
        return res.status(200).json({guest});
    } catch (err) {
        if(err) {
            console.log(err);
            return res.status(500).json({message: "Something went wrong, Please try again."})
        }
    }
};

//FUNCTION TO CREATE A NEW GUEST ENTRY
exports.createGuest = async(req, res) => {
    try {
        const guest = await Guest.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            rsvp: req.body.rsvp,
            rsvp_date: req.body.rsvp_date,
            plus_one: req.body.plus_one
            });
        return res.status(200).json({message: "New guest entry created", guest});
    } catch (err) {
        console.log(err);
        return res.status(500).json({message: 'Something went wrong. Please try again.'})
    }
};

exports.updateGuest = async(req, res) => {
    try{
        const guestId = req.params.id;
        const updated = await models.Guest.update(req.body, {
            where: { id: guestId }
        });
        if (updated) {
            const updatedGuest = await models.Guest.findOne({ where: {id: guestId } });
            return res.status(200).json({ guest: updatedGuest})
        } else {
            return res.status(404).json({message: "Guest not found"});
        }
    } catch (err) {
        if(err) {
            console.log(err);
            return res.status(500).json({message: "Something went wrong, Please try again."})
        }
    }
};

exports.deleteGuest = async(req, res) => {
    try {
        const guestId = req.params.id;
        const deletedGuest = await Guest.destroy({
            where: {
                id: guestId
            }
        });
        if (deletedGuest) {
            return res.status(200).json({message: "Guest deleted"});
        } else {
            res.status(404).json({message: "Guest not found"})
        }
    } catch (err) {
        if(err) {
            console.log(err);
            return res.status(500).json({message: "Something went wrong, Please try again."})
        }
    }
}


