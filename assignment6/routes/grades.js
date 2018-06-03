const express = require('express');
const router = express.Router();

var grades = [
    { "id": 1, "name": "Mohamed Gharib", "course": "CS572", "grade": 95 }
];

// listing all grades
router.get('/', function (req, res, next) {
    res.status(200).json(grades);
});

//get grade by id
router.get('/:id', function (req, res, next) {
    let grade = {};

    for (const g of grades) {
        console.log(req.params);

        if (g.id == req.params.id) {
            grade = g;
            break;
        }
    }

    res.status(200).json(grade);
});

// create new grade
router.post('/', function (req, res, next) {

    req.assert('id', 'Id required and numberic').notEmpty().isInt();
    req.assert('name', 'Name is required').notEmpty();
    req.assert('grade', 'Grade required and Numberic').isNumeric();
    req.assert('course','Course is required').notEmpty();

    const errors = req.validationErrors();
    if (errors)
        res.status(500).json({ errors: errors });
    else{
        grades.push({

            id:req.body.id,
            id:req.body.id,
            name:req.body.name,
            grade:req.body.grade,
            course:req.body.course,
        });
        res.status(200).json("Grade Added Successfully");
    }

});




module.exports = router;
