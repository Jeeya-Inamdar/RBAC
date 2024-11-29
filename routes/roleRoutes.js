const express = require("express");
const {
  getRoles,
  createRole,
  updateRole,
  deleteRole,
} = require("../controllers/roleController");

const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");

const router = express.Router();

// Role Routes
router.get(
  "/roles",
  authMiddleware,
  roleMiddleware(["Admin"]),
  getRoles // Corrected function name
); // Admin only

router.post(
  "/roles",
  authMiddleware,
  roleMiddleware(["Admin"]),
  createRole // Corrected function name
); // Admin only

router.put(
  "/roles/:id",
  authMiddleware,
  roleMiddleware(["Admin"]),
  updateRole // Corrected function name
); // Admin only

router.delete(
  "/roles/:id",
  authMiddleware,
  roleMiddleware(["Admin"]),
  deleteRole // Corrected function name
); // Admin only

module.exports = router;
