//const Sequelize = require('sequelize');
const db = require('./src/databases/database');
const { Guest, Table } = db.models;


// async IIFE
(async () => {
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

        const guest2 = await Guest.create({
            first_name: 'Regina',
            last_name: 'Foreman',
            rsvp: 'Yes',
            rsvp_date: '2021-10-01',
            plus_one: 'Yes'
        });
        console.log(guest2.toJSON());

        const guest3 = await Guest.create({
            first_name: 'Ariel',
            last_name: 'Foreman',
            rsvp: 'No',
            rsvp_date: null,
        });
        console.log(guest3.toJSON());
        
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            const errors = error.errors.map(err => err.message);
            console.error('Validation errors: ', errors);
        } else {
            throw error;
        }
    }
}) ();
