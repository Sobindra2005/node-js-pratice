const express = require("express");
const { User } = require("../models/user.js");

async function getuserhandler(req, res) {
  console.log("you got it!");
  const alldbuser = await User.find({});

  return res.json(alldbuser);
}

async function postuserhandler(req, res) {
  const Body = req.body;
  // Check if all required fields are present
  if (
    !Body ||
    !Body.first_name ||
    !Body.last_name ||
    !Body.email ||
    !Body.gender
  ) {
    return res
      .status(400)
      .send("All fields (first_name, last_name, email, gender) are required.");
  }
  try {
    // Create the user in the database
    const result = await User.create({
      first_name: Body.first_name,
      last_name: Body.last_name,
      email: Body.email,
      job_title: Body.job_title,
      gender: Body.gender,
    });
    res.status(201).json({ msg: "success", data: result });
    console.log(result);
  } catch (error) {
    console.log("Error creating user:", error);
    res.status(500).send("Internal server error");
  }
}

async function getuserbyid(req, res) {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).json({ msg: "user not found !!" });
    }
    console.log("You got the users details with the help of id !!");
    return res.json(user);
  } catch (error) {
    console.log("error is ", error);
  }
}
async function updateuserbyid(req, res) {
  try {
    const Body = req.body;
    await User.findByIdAndUpdate(req.params.id, Body);
    return res.status(200).json({ msg: "sucessfly" });
  } catch (err) {
    console.log("error is occur");
  }
}
async function deleteuserbyid(req, res) {
  try {
    await User.findByIdAndDelete(req.params.id);
    console.log("sucessfully deleted the user !");
    return res.status(200).json({ status: "success" });
  } catch (err) {
    console.log("error by user is ", err);
  }
}

module.exports = {
  getuserhandler,
  postuserhandler,
  getuserbyid,
  updateuserbyid,
  deleteuserbyid,
};
