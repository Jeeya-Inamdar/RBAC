// Middleware to check if the user has the required role
const roleMiddleware = (roles) => {
  return (req, res, next) => {
    // Ensure user data exists in request
    if (!req.user) {
      return res.status(401).json({ message: "No user found" });
    }

    // Check if the user has one of the allowed roles
    if (!roles.includes(req.user.role)) {
      return res
        .status(403)
        .json({ message: "Forbidden: You do not have the necessary role" });
    }

    next(); // If the role is valid, move to the next middleware or route handler
  };
};

module.exports = roleMiddleware;
