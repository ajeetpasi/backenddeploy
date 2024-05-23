import { DataTypes } from "sequelize";

export default (sequelize) => {
  const latestUpdate = sequelize.define("latestUpdate", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    latestUpdateImg: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    updateTitle: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    updatedby: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return latestUpdate;
};
