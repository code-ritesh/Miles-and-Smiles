import { Router } from "express";

const router = Router();

// Signup route.
router.post("/signup", (req, res) => {
  const userData = req.body;
  if (!userData.username || !userData.password) {
    return res
      .status(400)
      .json({ message: "Username and password cannot be empty." });
  }
  console.log("sign up attempt by", userData);
  res.status(200).json({ message: "Sign Up Successful", data: userData });
});

// Login route.
router.post("/login", (req, res) => {
  const userData = req.body;
  if (!userData.username || !userData.password) {
    return res
      .status(400)
      .json({ message: "Username and password cannot be empty." });
  }
  console.log("login attempt by", userData);
  res.status(200).json({ message: "Login Successful", data: userData });
});

export default router;
