const Sequelize = require('sequelize');

module.exports = (sequelize) => {
// User model
    class User extends Sequelize.Model {}
    User.init({
        username: {
           type: Sequelize.STRING,
           allowNull: false,
           validate: {
            notNull: {
                msg: 'A username is required',
            },
               notEmpty: {
                   msg: 'A username is required',
               },
               isLowercase: true
           }
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'An email is required',
            },
               notEmpty: {
                   msg: 'An email is required',
               },
               isEmail: {
                   msg: 'Please provide a valid email address'
               },
               isLowercase: true
            }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'A password is required',
            },
               notEmpty: {
                   msg: 'A password is required',
               }
            }
        }
    }, { 
        timestamps: false,
        modelName: 'user',
        sequelize }); // same as {sequelize: sequelize}
    
    return User;
};