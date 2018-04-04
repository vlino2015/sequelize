
var Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://localhost:5432/blogClass');

const models = {
    post: sequelize.import('./post'),
    comment: sequelize.import('./comment'),
    
};


Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports =  models;