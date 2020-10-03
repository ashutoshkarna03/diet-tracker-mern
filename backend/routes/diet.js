const router = require('express').Router();
let Diet = require('../models/diet.model');

router.route('/').get((req, res) => {
    Diet.find()
        .then(diet => res.json({
            success: true,
            data: diet
        }))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const dietName = req.body.dietName;
    const description = req.body.description;
    const calories = Number(req.body.calories);
    const date = Date.parse(req.body.date);

    const newDiet = new Diet({
        username,
        dietName,
        description,
        calories,
        date,
    });

    newDiet.save()
        .then(() => res.json({
            success: true,
            message: 'Diet Added!',
            dietId: newDiet._id
        }))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Diet.findById(req.params.id)
        .then(diet => res.json({
            success: true,
            data: diet
        }))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Diet.findByIdAndRemove(req.params.id)
        .then(() => res.json({
            success: true,
            message: 'Diet Deleted!'
        }))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Diet.findById(req.params.id)
        .then(diet => {
            diet.username = req.body.username;
            diet.dietName = req.body.dietName;
            diet.description = req.body.description;
            diet.calories = Number(req.body.calories);
            diet.date = Date.parse(req.body.date);

            diet.save()
                .then(() => res.json({
                    success: true,
                    message: 'Diet Updated!'
                }))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;