const express=require('express')
const router=express.Router();
const controller=require('../controller/registrationcontroller');
const passwordcontroller= require("../controller/passwordcontroller");
const logincontroller = require("../controller/logincontroller");
const homecontroller= require("../controller/homecontroller");
const alumniregistrationcontroller=require("../controller/alumniregistrationcontroller");
const jobcontroller = require("../controller/jobpostcontroller");

router.route("/studentregistration").post(controller.studentregistration);
//router.route("/studentregister/complete").post(controller.completestudentregister);
router.route("/verifystudentemail").post(controller.verifyEmail);

router.route("/alumniregistration").post(alumniregistrationcontroller.alumniregistration);
router.route("/verify-email").post(alumniregistrationcontroller.verifyEmail);


router.route("/forgotPassword").post(passwordcontroller.forgotPassword);
router.route("/resetPassword/:role/:token").patch(passwordcontroller.resetPassword);


router.route("/updatePassword").patch(logincontroller.protect,passwordcontroller.updatePassword);
//router.route("/home").get(logincontroller.protect,homecontroller.home);

router.route("/postjobs").post(jobcontroller.postjobposts);
router.route("/getjobs").post(jobcontroller.getjobposts);


router.route("/home").get(logincontroller.protect,homecontroller.home);
// router.route("/getbatchdetails").post(controller.getUsersByBatchYear);


router.route("/login").post(logincontroller.login);


module.exports=router;