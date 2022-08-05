const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//News Headlines table info

FakeNews.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    label: {
      type: DataType.BOOLEAN,
      allowNull: false,
      unique: false
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'fakeNews',
  }
);

module.exports = FakeNews;