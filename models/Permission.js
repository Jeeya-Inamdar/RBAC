const mongoose = require("mongoose");

// Define the Permission schema
const permissionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true, // Ensure each permission name is unique
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

// Create the Permission model
const Permission = mongoose.model("Permission", permissionSchema);

module.exports = Permission;
