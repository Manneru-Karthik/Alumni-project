const express = require("express");
const router = express.Router();
const Event = require("../models/Eventmodel");
var multer= require('multer');

var fs= require('fs');
var path= require('path');

var storage= multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null,'eventuploads')
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+'-'+Date.now())
    }
});

var upload= multer({storage:storage})

const { checkAuth } = require("../controller/auth");
// Get all events
router.get("/getevent", async (req, res) => {
  try {
    const events = await Event.find().populate("creator");
    res.json(events);p
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new event (only for authenticated alumni or admin)
router.post("/postevent", checkAuth, async (req, res) => {
  const { title, description, date, time, isOnline, location } =
    req.body;
  const event = new Event({
    title,
    description,
    Image:{
        data: fs.readFileSync(path.join(__dirname+ '/eventuploads/'+ req.file.filename)),
        contentType:'image/png'
    },
    date,
    time,
    isOnline,
    location: isOnline ? null : location,
    creator: req.user._id, // Assuming user is stored in req.user
  });

  try {
    const newEvent = await event.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;