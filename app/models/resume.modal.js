module.exports = (sequelize, Sequelize) => {
    const Resume = sequelize.define("resume", {
        name: {
            type: Sequelize.STRING
        },
        dob: {
            type: Sequelize.DATE
        },
        country: {
            type: Sequelize.STRING
        },
        filePath: {
            type: Sequelize.STRING
        }
    });

    return Resume;
};
