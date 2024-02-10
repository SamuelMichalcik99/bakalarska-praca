module.exports = (sequelize, DataTypes) => {
  const hard_disk_drive = sequelize.define("hard_disk_drive", {
    hard_disk_drive_id: {
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
    memory: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
  return hard_disk_drive;
}