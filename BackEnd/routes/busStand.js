const router = require("express").Router();
let BusStand = require("../models/checkIns");

router.route("/add").post((req,res) => {
    const nic = req.body.nic;
    const telnumber = Number(req.body.telnumber);

    const newVisitor = new BusStand({
        nic,
        telnumber
        
    })

    newVisitor.save().then(() => {
        res.json("visitor added")
    }).catch((err) => {
        console.log(err);
    })
})

router.route("/").get((req,res) => {
    BusStand.find().then((visitors) => {
        res.json(visitors)
    }).catch((err) => {
        console.log(err)
    })
})

module.exports = router;