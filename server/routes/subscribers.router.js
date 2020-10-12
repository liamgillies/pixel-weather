const express = require('express');
const subscriberService= require("../controllers/subscribers.controller");
const router = express.Router();

/* GET users listing. */
router.post('/addemail', subscriberService.addEmail);
router.get('/getemails', subscriberService.getEmails);

module.exports = router;
