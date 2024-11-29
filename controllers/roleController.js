const Role = require("../models/Role");

// Get all roles
exports.getRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    res.status(200).json(roles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new role
exports.createRole = async (req, res) => {
  const { name, permissions } = req.body;
  try {
    const newRole = new Role({ name, permissions });
    await newRole.save();
    res
      .status(201)
      .json({ message: "Role created successfully", role: newRole });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a role's permissions
exports.updateRole = async (req, res) => {
  const { permissions } = req.body;
  try {
    const role = await Role.findByIdAndUpdate(
      req.params.id,
      { permissions },
      { new: true }
    );
    res.status(200).json({ message: "Role updated successfully", role });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a role
exports.deleteRole = async (req, res) => {
  try {
    await Role.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Role deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
