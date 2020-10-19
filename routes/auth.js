var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
const {signout, signup, signin, isSignedIn} = require("../controllers/auth");

router.post("/signup", [
    check("firstname" , "Name should be atleast 3 char long").isLength({min: 3}),
    check("email" , "Email not found").isEmail(),
    check("password" , "Password should be atleast 3 char long").isLength({min: 3})
] ,signup);

router.post("/signin", [
    check("email" , "Email not found").isEmail(),
    check("password" , "Password should be atleast 3 char long").isLength({min: 3})
] ,signin);

router.get("/signout", signout);

router.get("/testroute", isSignedIn, (req,res) => {
    res.send("Protected Route")
});

module.exports = router;