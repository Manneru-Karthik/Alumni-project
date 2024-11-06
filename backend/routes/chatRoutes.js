const express = require("express");
const {
  accessChat,
  fetchChats,
  createGroupChat,
  groupExit,
  fetchGroups,
} = require("../controller/chatControllers");
const { protect } = require("../controller/logincontroller");

const router = express.Router();

router.route("/accesschats").post(protect, accessChat);
router.route("/fetchchats").get(protect, fetchChats);
router.route("/createGroup").post(protect, createGroupChat);
router.route("/fetchGroups").get(protect, fetchGroups);
router.route("/groupExit").put(protect, groupExit);

module.exports = router;
