const express = require("express");
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController"); // Corrected import (no need for .js extension)

const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");

const router = express.Router();

router.get(
  "/users",
  authMiddleware,
  roleMiddleware(["Admin"]),
  getUsers // Use the function imported above
); // Admin only
router.post(
  "/users",
  authMiddleware,
  roleMiddleware(["Admin"]),
  createUser // Use the function imported above
); // Admin only
router.put(
  "/users/:id",
  authMiddleware,
  roleMiddleware(["Admin", "Moderator"]),
  updateUser // Use the function imported above
); // Admin or Moderator
router.delete(
  "/users/:id",
  authMiddleware,
  roleMiddleware(["Admin"]),
  deleteUser // Use the function imported above
); // Admin only

module.exports = router;
