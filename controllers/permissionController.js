const Permission = require("../models/Permission.js");

// Get all permissions
exports.getPermissions = async (req, res) => {
  try {
    const permissions = await Permission.find();
    res.status(200).json(permissions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Assign permissions to a role
exports.assignPermissions = async (req, res) => {
  const { roleId, permissions } = req.body;
  try {
    const role = await Role.findById(roleId);
    if (!role) return res.status(404).json({ message: "Role not found" });

    role.permissions = permissions;
    await role.save();
    res
      .status(200)
      .json({ message: "Permissions assigned successfully", role });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
