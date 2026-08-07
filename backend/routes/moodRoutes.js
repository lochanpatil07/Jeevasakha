const express = require("express");
const router = express.Router();

const Mood = require("../models/Mood");
const { protect } = require("../middleware/authMiddleware");

// Create a new mood entry
router.post("/", protect, async (req, res) => {
  try {
    const { mood, note } = req.body;

    // Validate mood
    if (!mood) {
      return res.status(400).json({
        message: "Mood is required",
      });
    }

    const newMood = new Mood({
      user: req.user.id,
      mood,
      note: note || "",
    });

    const savedMood = await newMood.save();

    res.status(201).json(savedMood);
  } catch (error) {
    console.error("Error creating mood:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
});

// Get all moods for logged-in user
router.get("/", protect, async (req, res) => {
  try {
    const moods = await Mood.find({
      user: req.user.id,
    }).sort({ createdAt: -1 });

    res.status(200).json(moods);
  } catch (error) {
    console.error("Error fetching moods:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
});

module.exports = router;