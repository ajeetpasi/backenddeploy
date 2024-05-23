import { DataTypes } from "sequelize";

export default (sequelize) => {
  const eventandExam = sequelize.define("eventandExam", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postby: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return eventandExam;
};
