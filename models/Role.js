const mongoose = require("mongoose");

const RoleSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  permissions: { type: [String], default: [] }, // e.g., ['READ', 'WRITE', 'DELETE']
});

module.exports = mongoose.model("Role", RoleSchema);
