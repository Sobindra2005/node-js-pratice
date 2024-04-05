const express = require("express");
const router = express.Router();
const { User } = require('../models/user.js');
const {
  getuserhandler,
  postuserhandler,
  getuserbyid,
  updateuserbyid,
  deleteuserbyid
} = require("../controllers/user.js");

// Route for "/"
router.route("/")
  .get(getuserhandler)
  .post(postuserhandler);

// Route for "/:id"
router.route("/:id")
  .get(getuserbyid)
  .patch(updateuserbyid)
  .delete(deleteuserbyid);

module.exports = router;
