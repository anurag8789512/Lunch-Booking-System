const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const UserLogin = require("./Models/UserLogin");
const MenuItem = require("./Models/MenuItem");
const UserSelection = require("./Models/UserSelection");
const app = express();
const dataBase = require("./database.js");
const Lunch = require("./Models/Lunch");
const Snack = require("./Models/Snack.js");
app.use(cors());
app.use(express.json());

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await UserLogin.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserLogin({ email, password: hashedPassword });
    await newUser.save();

    res
      .status(201)
      .json({ success: true, message: "User registered successfully." });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Registration failed. Please try again.",
    });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserLogin.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User does not exist." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials." });
    }

    res
      .status(200)
      .json({ success: true, message: "Login successful.", role: user.role });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Login failed. Please try again." });
  }
});

app.post("/contents", async (req, res) => {
  const { date, lunchItems } = req.body;

  try {
    const newLunch = new Lunch({
      date,
      lunchItems,
    });
    await newLunch.save();
    res
      .status(201)
      .json({ success: true, message: "Lunch data saved successfully." });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error saving lunch data." });
  }
});

app.get("/contents", async (req, res) => {
  try {
    const lunches = await Lunch.find().sort({ date: -1 });
    res.status(200).json(lunches);
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error fetching lunch contents." });
  }
});

app.post("/snacks", async (req, res) => {
  const { date, snacks } = req.body;

  try {
    const newSnack = new Snack({ date, snacks });
    await newSnack.save();
    res
      .status(201)
      .json({ success: true, message: "Snack data saved successfully." });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error saving snack data." });
  }
});

app.get("/snacks", async (req, res) => {
  try {
    const snacks = await Snack.find().sort({ date: -1 });
    res.status(200).json(snacks);
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error fetching snack data." });
  }
});

app.get("/menu", async (req, res) => {
  try {
    const lunches = await Lunch.find().sort({ date: -1 });
    const snacks = await Snack.find().sort({ date: -1 });

    const combinedData = lunches.map((lunch) => ({
      date: lunch.date,
      lunchItems: lunch.lunchItems,
      snacks: snacks.find((snack) => snack.date === lunch.date)?.snacks || [],
    }));

    res.status(200).json(combinedData);
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error fetching menu data." });
  }
});

app.post("/select", async (req, res) => {
  const {
    userId,
    day,
    lunchSelected,
    snackSelected,
    isVegetarian,
    isNonVegetarian,
  } = req.body;

  try {
    await UserSelection.findOneAndUpdate(
      { userEmail: userId, date: day },
      { lunchSelected, snackSelected, isVegetarian, isNonVegetarian },
      { upsert: true, new: true }
    );
    res
      .status(200)
      .json({ success: true, message: "Selection saved successfully." });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error saving selection." });
  }
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
