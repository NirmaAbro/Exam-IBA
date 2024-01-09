const express = require("express");

const mongoose = require("mongoose");
const Poet = require("../models/poetModel");
const router = express.Router();
router.post("/", async (req, res) => {
  const { name, title, language } = req.body;
  try {
    const userAdded = await Poet.create({
      name: name,
      title: title,
      language: language,
    });
    res.status(201).json(userAdded);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const showAll = await Poet.find();
    res.status(200).json(showAll);
  } catch (error) {
    res.send(500).json({
      error: error.message,
    });
  }
  res.send("api running and and i am learning ");
});
//get single user
router.get("/", async (req, res) => {
  const { id } = req.params;
  try {
    const singleUser = await Poet.findById({ _id: id });
    res.status(200).json(singleUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error.message,
    });
  }
});
// delete operation
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteUser = await Poet.findByIdAndDelete({ _id: id });
    res.status(200).json(deleteUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error.message,
    });
  }
});
// update user
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, title, language } = req.body;
  try {
    const updateUser = await Poet.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updateUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error.message,
    });
  }
});
module.exports = router;
