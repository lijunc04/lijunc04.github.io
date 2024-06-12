
const router = require('express').Router();
let Project = require('../models/project.model');

router.route('/').get((req,res) =>{
    Project.find()
        .then(projects => res.json(projects))
        .catch(err => res.status(400).json("Error: "+err))
});

router.route('/').post((req,res) =>{
    const title = req.body.title;
    const date = req.body.date;
    const description = req.body.description;
    const image = req.body.image;
    const link = req.body.link;
    const categories = req.body.categories;
    const languages = req.body.languages;
    const awards = req.body.awards

    const newProject = new Project({
        title,
        date,
        description,
        image,
        link,
        categories,
        languages,
        awards
    });

    newProject.save()
        .then(() => res.json('Project added'))
        .catch(err => res.status(400).json("Error: "+err))
});

router.route('/').put((req,res) =>{

})

module.exports = router;