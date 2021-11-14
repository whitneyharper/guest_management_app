const express = require('express');
const app = express();
const port = 3000;
const dbSetup = require('./src/databases/database');
const db = require('./src/databases/database')

//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

 db.sequelize.sync().then(() => {
     console.log('Table created');
 });

//REQUIRE ROUTES
const guestsRoutes = require('./src/routes/guestsRoutes');


app.use('/guests', guestsRoutes);


app.listen(port, () => {
    console.log(`Server is up and running. Listening on port: ${port}.`);
});