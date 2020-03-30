const express = require('express');
const router = express.Router();
const task = require('../models/task');

router.get('/', async (req, res) => {
 const tasks = await Task.find();
//  console.log(tasks)

res.render('index', {
    tasks // tasks:tasks
});
});

// add task

router.post('/add', async(req, res) => {
    // console.log(req.body);
    const task = new task(req.body);
   await task.save();
    res.send(redirect('/'));
})

router.get('/done/:id', async (req, res ) =>{
    const {id} = req.params;
    const task = await Task.findById();   // to find id
    // console.log(task);
    task.status = !task.status;           // change status  
     await task.save();                  // save status
     res.send(redirect('/'));
})


router.get('/delete/:id', async( req, res) => {
const {id} = req.params;
// res.send("received")
 await Task.remove({_id: id})
res.redirect('/');
});



module.exports = router;