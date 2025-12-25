const db = require("../models");
const Report = db.reports;
const ReportAccess = db.reportAccess;

exports.uploadReport = async (req, res) => {
    try {
        const { reportType, associatedVitals, reportDate } = req.body;
        const report = await Report.create({
            userId: req.userId,
            reportType,
            associatedVitals,
            reportDate,
            filePath: req.file.path
        });
        res.status(201).json(report);
    } catch (error) {
        res.status(500).json({ message: "Report upload failed" });
    }
};

exports.shareReport = async (req, res) => {
    try {
        const { reportId, sharedWithUserId } = req.body;
        const access = await ReportAccess.create({
            reportId,
            sharedWithUserId,
            accessType: "READ"
        });
        res.status(201).json(access);
    } catch (error) {
        res.status(500).json({ message: "Failed to share report" });
    }
};
