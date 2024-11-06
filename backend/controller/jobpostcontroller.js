const jobmodel= require('../models/Jobmodel.js')

var multer= require('multer');

var fs= require('fs');
var path= require('path');

var storage= multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null,'jobuploads')
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+'-'+Date.now())
    }
});

var upload= multer({storage:storage})

const getjobposts= async(req,res)=>{
    jobmodel.find({})
    .then((data,err) => {
        if(err){
            console.log(err);
        }
        res.render('imagepage',{items:data});
    })
};


const postjobposts= (req,res,next)=>{
    var obj={
        title:req.body.title,
        company: req.body.company,
        companyImage:{
            data: fs.readFileSync(path.join(__dirname+ '/jobuploads/'+ req.file.filename)),
            contentType:'image/png'
        },
        location: req.body.location,
        description:req.body.description,
        qualification: req.body.qualification,
        applicationDeadline: req.body.applicationDeadline,
        postedBy:updateSearchIndex,
    };

    jobmodel.create(obj)
    .then((item) => {
        res.redirect('/home');
    })
    .catch((err) =>{
        console.log(err);
        res.status(500).send("Error uploading image");
    });
};


module.exports={getjobposts,postjobposts};
