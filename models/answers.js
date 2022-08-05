const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//score table

Answers.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userName: {
      type: DateTypes.STRING,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },
    },
      score: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'answers',
  }
);

module.exports = Answers;

