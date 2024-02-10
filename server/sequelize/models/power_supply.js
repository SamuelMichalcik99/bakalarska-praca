module.exports = (sequelize, DataTypes) => {
  const power_supply = sequelize.define("power_supply", {
    power_supply_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoincrement: true,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    wattage: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    certification: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  },
    {
      freezeTableName: true,
      timestamps: false
    }
  )
  return power_supply;
}