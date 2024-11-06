const eventmodel= require('../models/Eventmodel.js')

var multer= require('multer')
var fs= require('fs')
var path= require('path')

var storage= multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'eventuploads')
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+'-'+Date.now())
    }
});

var upload= multer({storage:storage})

const getevents= async(req,res) =>{
     eventmodel.find({})
     .then((data,err) => {
        if(err){
            console.log(err);
        }
        res.render('imagepage',{items:data});
     })
};

const postevents= (req,res,next)=>{
    var obj={
        title: req.body.titile,
        description:req.body.description,
        Image:{
            data:fs.readFileSync(path.join(__dirname+ '/eventuploads'+req.file.filename)),
            contentType:'image/png'
        },
        date:req.body.date,
        time:req.body.time,
        isOnline:req.body.isOnline,
        creationDate:req.body.creationDate,
        location:req.body.location,
        creator:req.body.creatorid,
    };

    eventmodel.create(obj)
    .then((item) => {
        res.redirect('/home');
    })
    .catch((err) => {
        console.log(err);
        res.status(500).send("Error uploading image");
    });
};

module.exports={getevents,postevents};