
const mongoose = require('mongoose');

const projectSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        date:{
            type: Date,
            default: Date.now
        },
        description: {
            type: String,
            default: "There is no description for this project."
        },
        image: {
            type: String,
            default: "defaultImage.jpg"
        },
        link: {
            type: String
        },
        categories: {
            type: Array
        },
        languages: {
            type: Array
        },
        awards: {
            type: Array
        }
    }
)

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;