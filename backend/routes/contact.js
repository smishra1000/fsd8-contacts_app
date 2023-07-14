const express = require("express")
const ContactModel = require("../models/contact")
const router = express.Router();
router.post("/addcontact", function (req, res) {
    // login for saving new contact in db
    let contact = new ContactModel(req.body)
    contact.save().then(function (contact) {
        res.send({ msg: "conatct created successfully" })
    }).catch(function (err) {
        res.send(err)
    })
})

router.get("/contactlist", function (req, res) {
    // logic for get contact list from db
    ContactModel.find({}).then(function (conatcts) {
        res.send(conatcts)
    }).catch(function (err) {
        res.send(err)
    })
})

module.exports = router