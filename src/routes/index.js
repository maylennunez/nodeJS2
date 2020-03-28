const express = require('express');
const router = express.Router();
const task = require('../models/task');

router.get('/', async (req, res) => {
 const tasks = await task.find();
//  console.log(tasks)

res.render('index', {
    tasks // tasks:tasks
});
});



router.post('/add', async(req, res) => {
    // console.log(req.body);
    const task = new task(req.body);
   await task.save();
    res.send('received');
})





module.exports = router;