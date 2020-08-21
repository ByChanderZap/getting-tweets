const express = require('express')
const router = express.Router();
const storage = require('./storage')
const response = require('./response');


router.get('/', async (req, res) => {
    const { tweetsAbout } = req.body;
    try {
        const data = await storage.getTweets(tweetsAbout);
        //  req, res, message, status
        response.success(req, res, data, 200);
    } catch (error) {
        //  req, res, error, status, details
        response.error(req, res, "Error getting data.", 500, error);
    }
})

module.exports = router;