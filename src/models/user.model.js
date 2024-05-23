import { DataTypes } from "sequelize";

export default (sequelize) => {
  const User = sequelize.define("registeredschools", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    schoolName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    emailId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    schoolAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    district: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stdCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    landline: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pinCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobileNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prefix: {
      type: DataTypes.STRING,

      allowNull: false,
    },
    principalName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    syllabus: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return User;
};
