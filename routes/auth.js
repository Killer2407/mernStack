const express = require('express');
const router = express.Router();
const User = require("../models/user.model.js")

router.get('/', (req, res) => {
    res.send('Hello')
}),

    router.get('/', function (req, res) {
        db.collection('User').find({}).toArray(function (err, docs) {
            if (err) { console.error(err) }
            res.send(JSON.stringify(docs))
        })
    })
router.post('/', (req, res) => {
    res.send(req.body)
})

module.exports = router
