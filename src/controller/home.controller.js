import { db } from "../db/db.config.js";

const User = db.registerSchool;
const Home = db.homeScreenData;
const News = db.latestnewsData;
const Update = db.latestUpdateData;

const postCrouselData = async (req, res) => {
  try {
    const { crouselText, crouselLink } = req.body;
    const crouselImg = req.file;

    if (!crouselImg || !crouselText || !crouselLink) {
      return res.status(400).send({ message: "Bad Data" });
    }

    // Create user object
    const croselObject = {
      crouselImg: crouselImg.path,
      crouselText,
      crouselLink,
    };

    // Log the user object to debug
    // console.log("Creating user with data:", userObject);

    // Create user in the database
    const data = await Home.create(croselObject);

    // Send the created user data as the response
    res.send(data);
  } catch (error) {
    // Log the error to debug
    console.error("Error creating user:", error);

    // Send error response
    res.status(500).send({
      message: error.message || "Some error occurred while creating the User.",
    });
  }
};
const PostlatestNewsData = async (req, res) => {
  try {
    const { newsTitle, description, postby } = req.body;
    const newsImage = req.file;

    if (!newsImage || !newsTitle || !description || !postby) {
      return res.status(400).send({ message: "Bad Data" });
    }

    // Create user object
    const newsObject = {
      newsImage: newsImage.path,
      newsTitle,
      description,
      postby,
    };

    // Log the user object to debug
    // console.log("Creating user with data:", userObject);

    // Create user in the database
    const data = await News.create(newsObject);

    // Send the created user data as the response
    res.send(data);
  } catch (error) {
    // Log the error to debug
    console.error("Error creating user:", error);

    // Send error response
    res.status(500).send({
      message: error.message || "Some error occurred while creating the User.",
    });
  }
};
const PostlatestUpdateData = async (req, res) => {
  try {
    const { updateTitle, description, updatedby } = req.body;
    const latestUpdateImg = req.file;

    if (!latestUpdateImg || !updateTitle || !description || !updatedby) {
      return res.status(400).send({ message: "Bad Data" });
    }

    // Create user object
    const updateObject = {
      latestUpdateImg: latestUpdateImg.path,
      updateTitle,
      description,
      updatedby,
    };

    // Log the user object to debug
    // console.log("Creating user with data:", userObject);

    // Create user in the database
    const data = await Update.create(updateObject);

    // Send the created user data as the response
    res.send(data);
  } catch (error) {
    // Log the error to debug
    console.error("Error creating user:", error);

    // Send error response
    res.status(500).send({
      message: error.message || "Some error occurred while creating the User.",
    });
  }
};
const PostExamAndEventData = async (req, res) => {
  try {
    const { title, description, postby } = req.body;
    const image = req.file;

    if (!image || !title || !description || !postby) {
      return res.status(400).send({ message: "Bad Data" });
    }

    // Create user object
    const croselObject = {
      image: newsImage.path,
      title,
      description,
      postby,
    };

    // Log the user object to debug
    // console.log("Creating user with data:", userObject);

    // Create user in the database
    const data = await Home.create(croselObject);

    // Send the created user data as the response
    res.send(data);
  } catch (error) {
    // Log the error to debug
    console.error("Error creating user:", error);

    // Send error response
    res.status(500).send({
      message: error.message || "Some error occurred while creating the User.",
    });
  }
};

const getCrouselData = async (req, res) => {
  try {
    const crouselData = await Home.findAll();
    const cardData = await User.findAll();

    res.send({ crouselData, cardData });
  } catch (error) {
    console.error("Error retrieving home data:", error);
    res.status(500).send({
      message:
        error.message || "Some error occurred while retrieving the home data.",
    });
  }
};
export {
  postCrouselData,
  PostlatestNewsData,
  PostlatestUpdateData,
  PostExamAndEventData,
  getCrouselData,
};
