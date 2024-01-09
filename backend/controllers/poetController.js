const express = require("express");
const Poet = require("../models/poetModel");
const router = express.Router();

// Create a new poet
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

// Get all poets
router.get("/", async (req, res) => {
  try {
    const showAll = await Poet.find();
    res.status(200).json(showAll);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// Get a single poet by ID
router.get("/:id", async (req, res) => {
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

// Delete a poet by ID
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

// Update a poet by ID
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
