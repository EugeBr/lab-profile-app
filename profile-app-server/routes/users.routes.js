const express = require("express")
const router = express.Router()
const User = require("../models/User.model")
const isAuthenticated = require("../middlewares/isAuthenticated")

router.put("/", async (req, res, next) => {
    try {
        const id = req.session.currentUser._id;
        const image = req.body;
        const user = await User.findByIdAndUpdate(id, image, { new: true });
        return res.status(200).json(user)
    } catch (error) {
        next(error)
    }
});

router.get("/", async (req, res, next) => {
    try {
        const id = req.session.currentUser._id;
        const user = await User.findById(id)
        return res.status(200).json(user)
    } catch (error) {
        next(error);
    }
});

module.exports = router;