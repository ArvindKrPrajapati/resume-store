
const multer = require('multer')
const storage = multer.diskStorage({
    destination: "public/uploads/",
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage }).single('file')

module.exports = app => {
    const resume = require("../controllers/resume.controller.js");

    var router = require("express").Router();

    // Create a new Resume
    router.post("/", upload, resume.create);

    // Retrieve all resume
    router.get("/", resume.findAll);


    // Delete a Resume with id
    router.delete("/:id", resume.delete);

    // get countries list
    router.get("/countries", resume.countryList);

    app.use('/api/resume', router);
};
