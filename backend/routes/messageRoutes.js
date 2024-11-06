const express = require("express");
const msgcontroller = require("../controller/messageControllers");
const { protect } = require("../controller/logincontroller");

const router = express.Router();

router.route("/:chatId").get(protect, msgcontroller.allMessages);
router.route("/sendmessage").post(protect, msgcontroller.sendMessage);

module.exports = router;
