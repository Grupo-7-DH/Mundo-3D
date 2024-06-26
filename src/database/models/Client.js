const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Client = sequelize.define(
    "Client",
    {
      IDClient: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      FirstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      LastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      Tel: {
        type: DataTypes.INTEGER,
      },
      Image: {
        type: DataTypes.STRING,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      tableName: "User",
      timestamps: false,
    }
  );

  Client.findById = async function (clientId) {
    return await Client.findByPk(clientId);
  };

  return Client;
};
