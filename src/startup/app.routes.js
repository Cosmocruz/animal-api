const animalRoutes = require('./../routes/animal.routes');

module.exports = (app) => {
    app.use('/animal', animalRoutes);
};
