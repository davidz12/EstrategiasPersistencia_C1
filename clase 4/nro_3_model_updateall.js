const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('clase4', 'root', '2001', {
    host: 'localhost',
    dialect: 'mariadb'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
    });


class Automovil extends Sequelize.Model{}

Automovil.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    marca: {
        type: DataTypes.STRING
    },
    modelo: {
        type: DataTypes.STRING
    },
    año: {
        type: DataTypes.INTEGER
    }
}, {sequelize, modelName:'automovil'});

sequelize.sync()
  .then(() => Automovil.create({
    marca: "Audi",
    modelo: "A4",
    año: 2010
  }))
  .then(() => Automovil.update({ 
    marca: "Fiat",
    modelo: "Duna" 
    }, 
    { where: {
        marca: "Ford" 
    }}))

