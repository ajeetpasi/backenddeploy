import { DataTypes } from "sequelize";

export default (sequelize) => {
  const latestNews = sequelize.define("newsData", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    newsImage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    newsTitle: {
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

  return latestNews;
};
