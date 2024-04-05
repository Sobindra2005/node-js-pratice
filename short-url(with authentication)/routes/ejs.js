const express = require("express");
const router = express.Router();
const {ejsRender} = require("../controllers/url");


router.get('/test',ejsRender)
module.exports= router