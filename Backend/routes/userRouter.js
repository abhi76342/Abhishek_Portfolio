import express from "express";
import User from "../models/User.js"; 


const router = express.Router();
router.use(express.json());

router.post("/submit", async (req, res) => {
    try {
      const feadData = req.body;
      if (!feadData || Object.keys(feadData).length === 0) {
        return res
          .status(400)
          .json({ message: "Unable to Receive your Feedback. 😕" });
      }
      // Assuming you have defined a MongoDB model named FeedbackModel
      const formfeedback = new User(feadData);
      await formfeedback.save();
      return res
        .status(200)
        .json({ message: "Your Feedback Received Successfully! 👍" });
    } catch (e) {
      console.error(e);
      return res.status(500).json({ message: "Internal Issue 🦿" });
    }
  });

  export default router