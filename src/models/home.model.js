import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Home = sequelize.define("crouselData", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    crouselImg: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    crouselText: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    crouselLink: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Home;
};
