//const Sequelize = require('sequelize');
const db = require('../databases/database');
const { Guest } = db.models;
const {Op} = db.sequelize;

// async IIFE
/*(async () => {
    // Sync all tables
    await db.sequelize.sync({ force: true });

    try {
        // Instance of the Guest class represents a database row
        const guest = await Guest.create({
            first_name: 'Lucinia',
            last_name: 'Plummer',
            rsvp: 'No',
            rsvp_date: null,
        });
        console.log(guest.toJSON());
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            const errors = error.errors.map(err => err.message);
            console.error('Validation errors: ', errors);
        } else {
            throw error;
        }
    }
}) ();*/


// FUNCTION TO VIEW ALL GUESTS
exports.viewAllGuests = async(req, res) => {
    try { const guests = await Guest.findAll()
        return res.status(200).json({guests});    
    } catch(err) {
        console.log(err);
        return res.status(500).json({message: 'Something went wrong. Please try again later'});
    }
};

//FUNCTION TO VIEW SINGLE ENTRY BY FIRST NAME AND LAST NAME 
exports.viewGuest = async(req, res) => {
    try{
        const guest = await Guest.findOne({
            where: {
                first_name : req.body.first_name,  
                last_name : req.body.last_name
            }
        });
        if(!guest) {
            return res.status(404).json({message: 'Guest no found'});
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
        const guest = await Guest.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        if(!guest) {
            return res.status(404).json({message: 'Guest no found'});
        }
        return res.status(200).json({message: 'Guest entry is updated', guest});
    } catch (err) {
        if(err) {
            console.log(err);
            return res.status(500).json({message: "Something went wrong, Please try again."})
        }
    }
} 


