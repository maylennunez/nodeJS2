const express = require('express');
const router = express.Router();
const Task = require('../models/task');

router.get('/', async (req, res) => {
 const tasks = await Task.find();
//  console.log(tasks)

res.render('index', {
    tasks // tasks:tasks
});
});

// add task

router.post('/add', async (req, res, next) => {
    // console.log(req.body);
    const task = new Task(req.body);
   await task.save();
    res.redirect('/');
})

// done btn 

router.get('/done/:id', async (req, res, next) => {
    const {id} = req.params;
    const task = await Task.findById(id);       // to find id
    // console.log(task);
    task.status = !task.status;               // change status  
     await task.save();                      // save status
     res.send(redirect('/'));
})

// edit btn

router.get('/edit/:id', async (req, res) => {
    // const {id} = req.params;
    const task = await Task.findById(req.params.id); 
    res.render('edit', {
        task
    });
});

router.post('/edit/:id', async (req, res, next )=>{
    const {id} = req.params;
    await Task.update({_id: id }, req.body);
    res.send(redirect('/'));
});

// delete btn

router.get('/delete/:id', async( req, res, next) => {
const {id} = req.params;
// res.send("received")
 await Task.remove({_id: id})
res.redirect('/');
});




module.exports = router;