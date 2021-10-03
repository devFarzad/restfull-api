const express = require('express');
const router = express.Router();
const {api:ControllerAPI}=config.path.controllers;
// const {web:ControllerWeb}=config.path.controllers;
//model
const Course = require('../../models/Course');
const homeController = require(`../../controllers/api/V1/HomeController`);
const courseController = require(`../../controllers/api/V1/CourseController`);
const adminCourseController = require('../../controllers/api/V1/admin/CourseController');
const HomeController = require('../../controllers/api/V1/HomeController');

router.get('/',HomeController.index);
router.get('/version',HomeController.version);
// console.log('API PATH ');
// console.log(ControllerAPI);
//Controllers//

// console.log(homeController);

const adminRouter = express.Router();
adminRouter.get('/courses', adminCourseController.index.bind(adminCourseController));
adminRouter.post('/courses', adminCourseController.store);
adminRouter.put('/courses/:id',adminCourseController.update);
adminRouter.delete('/courses/:id', adminCourseController.delete);
router.use('/admin', adminRouter);
// router.get('/courses',(req,res)=>{
// res.json({
//     data:[{
//         title: 'course 1',
//         body:'this is course 1'
//     },{
//         title: 'course 2',
//         body:'this is course 2'
//     },{
//         title: 'course 3',
//         body:'this is course 3'
//     },{
//         title: 'course 4'
//     },{
//         title: 'course 5'
//     },{
//         title: 'course 6'
//     },
// ]
// })
// });
module.exports = router;