const express = require("express");
const router = express.Router();

const { verifyToken } = require("../middlewares/auth.middleware");
const upload = require("../middlewares/upload.middleware");
const controller = require("../controllers/reports.controller");

// Upload a report
router.post(
    "/",
    verifyToken,
    upload.single("file"),
    controller.uploadReport
);

// Share a report (read-only)
router.post(
    "/share",
    verifyToken,
    controller.shareReport
);

router.get("/", verifyToken, async (req, res) => {
    const db = require("../models");
    const Report = db.reports;

    const reports = await Report.findAll({
        where: { userId: req.userId }
    });

    res.json(reports);
});



module.exports = router;
