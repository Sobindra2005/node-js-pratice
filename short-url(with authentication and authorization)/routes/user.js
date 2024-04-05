const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const URL = require("../models/user");
const { HandleGenerateUrl,HandleRedirectUrl,HandleClickNumber } = require("../controllers/url");

router.post("/", HandleGenerateUrl);

router.get("/:shortId",HandleRedirectUrl);

router.get("/analytics/:shortId",HandleClickNumber);

// router.get("/",showGenerateUrl);


module.exports = router;
