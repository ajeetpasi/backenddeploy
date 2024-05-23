import { db } from "../db/db.config.js";

const User = db.registerSchool;

const schoolRegistration = async (req, res) => {
  try {
    const {
      schoolName,
      emailId,
      schoolAddress,
      city,
      state,
      district,
      stdCode,
      landline,
      pinCode,
      mobileNumber,
      prefix,
      principalName,
      syllabus,
    } = req.body;

    if (
      !schoolName ||
      !emailId ||
      !schoolAddress ||
      !city ||
      !state ||
      !district ||
      !stdCode ||
      !stdCode ||
      !landline ||
      !mobileNumber ||
      !prefix ||
      !principalName ||
      !syllabus
    ) {
      return res.status(400).send({ message: "Bad Data" });
    }

    // Create user object
    const userObject = {
      schoolName,
      emailId,
      schoolAddress,
      city,
      state,
      district,
      stdCode,
      landline,
      pinCode,
      mobileNumber,
      prefix,
      principalName,
      syllabus,
    };

    // Log the user object to debug
    // console.log("Creating user with data:", userObject);

    // Create user in the database
    const data = await User.create(userObject);

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

// Define other functions similarly

function findAllUsers(req, res) {
  // Implementation here
}

function findUserByEmail(req, res) {
  // Implementation here
}

function updateUser(req, res) {
  // Implementation here
}

function deleteUser(req, res) {
  // Implementation here
}

// module.exports = {
//   createUser,
//   findAllUsers,
//   findUserByEmail,
//   updateUser,
//   deleteUser,
// };
export { schoolRegistration };
