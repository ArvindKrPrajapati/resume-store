const db = require("../models");
const Resume = db.resume;
const countries = require('../../countries.json')
// Create and Save a new resume
exports.create = async (req, res) => {
    try {
        // Validate request
        console.log(req.body);
        const { name, dob, country } = req.body
        const filePath = "uploads/" + req.file.originalname
        if (!name || !dob || !country || !filePath) {
            return res.status(400).json({ success: false, error: "name ,dob,country is required" })
        }
        // Create a resume

        const resume = { name, dob, country, filePath };
        // Save resume in the database
        const data = await Resume.create(resume)
        return res.status(200).json({ success: true, data })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, error })
    }
};

// Retrieve all resume from the database.
exports.findAll = async (req, res) => {
    try {
        const data = await Resume.findAll({})
        return res.status(200).json({ success: true, data })
    } catch (error) {
        return res.status(500).json({ success: false, error })
    }
};






// Delete a Tutorial with the specified id in the request
exports.delete = async (req, res) => {
    try {
        const id = req.params.id;
        let msg;
        const data = await Resume.destroy({ where: { id: id } })
        if (data == 1) {
            msg = "Deleted Resume with id " + id
        } else {
            msg = "Could not delete the item , it might be not available"
        }
        return res.status(200).json({ success: true, data: msg })
    } catch (error) {
        return res.status(500).json({ success: false, error })
    }
};

// get country list
exports.countryList = (req, res) => {
    return res.status(200).json({ success: true, data: countries });
}
