const mongoose = require('mongoose');

module.exports = () => {
    mongoose
        .connect('mongodb://localhost/animals')
        .then(() => {
            console.log('Mongo Db connected');
        })
        .catch((e) => {
            console.log('MongoDb error ', e);
            process.exit(1);
        });
};
