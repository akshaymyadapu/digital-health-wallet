const express = require("express");
const router = express.Router();

const { verifyToken } = require("../middlewares/auth.middleware");
const controller = require("../controllers/vitals.controller");

// Add vitals
router.post(
    "/",
    verifyToken,
    controller.addVitals
);

// Get vitals
router.get(
    "/",
    verifyToken,
    controller.getVitals
);

module.exports = router;
