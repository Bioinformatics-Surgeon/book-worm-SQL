// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require('../models');

// Routes
// =============================================================
module.exports = function (app) {
    // GET route for getting all of the posts
    app.get('/api/words', function (req, res) {
        var query = {};
        // if (req.query.author_id) {
        //     query.AuthorId = req.query.author_id;
        // }
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Author
        db.Word.findAll().then(function (dbWord) {
            res.json(dbWord);
        });
    });

    // Get route for retrieving a single post
    app.get('/api/words/:id', function (req, res) {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Author
        db.Word.findOne({
            where: {
                id: req.params.id,
            },
        }).then(function (dbWord) {
            res.json(dbWord);
        });
    });

    // POST route for saving a new post
    app.post('/api/words', function (req, res) {
        db.Word.create(req.body).then(function (dbWord) {
            res.json(dbWord);
        });
    });

    // DELETE route for deleting words
    app.delete('/api/words/:id', function (req, res) {
        db.Word.destroy({
            where: {
                id: req.params.id,
            },
        }).then(function (dbWord) {
            res.json(dbWord);
        });
    });

    // PUT route for updating words
    app.put('/api/words', function (req, res) {
        db.Word.update(req.body, {
            where: {
                id: req.body.id,
            },
        }).then(function (dbWord) {
            res.json(dbWord);
        });
    });
};
