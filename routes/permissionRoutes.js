const express = require("express");
const {
  getPermissions,
  assignPermissions,
} = require("../controllers/permissionController");

const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");

const router = express.Router();

// Get all permissions (Admin only)
router.get(
  "/permissions",
  authMiddleware,
  roleMiddleware(["Admin"]),
  getPermissions
); // Admin only

// Assign permissions to a role (Admin only)
router.post(
  "/assign-permissions",
  authMiddleware,
  roleMiddleware(["Admin"]),
  assignPermissions
); // Admin only

module.exports = router;
