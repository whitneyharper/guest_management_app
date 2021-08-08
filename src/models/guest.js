const Sequelize = require('sequelize');

module.exports = (sequelize) => {
// Wedding guest model
    class Guest extends Sequelize.Model {}
    Guest.init({
        first_name: {
           type: Sequelize.STRING,
           allowNull: false,
           validate: {
            notNull: {
                msg: 'Please provide a first name value',
            },
               notEmpty: {
                   msg: 'Please provide a first name value',
               }
           }
        },
        last_name: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please provide a last name value',
                },
                notEmpty: {
                    msg: 'Please provide a last name value',
                }
            }
        },
        rsvp: {
            type: Sequelize.STRING,
            defaultValue: "No"
        },
        rsvp_date: {
            type: Sequelize.DATEONLY,
            validate: {
                isAfter: {
                    args: '2021-07-31',
                    msg: 'Please provide a data value after 08-01-2021 for RSVP date',
                }
            }
        },
        plus_one: {
            type: Sequelize.STRING,
            defaultValue: "No"
        }
    }, { 
        timestamps: false,
        modelName: 'guest',
        sequelize }); // same as {sequelize: sequelize}
    
    return Guest;
};