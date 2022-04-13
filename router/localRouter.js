const router = require('express').Router();
const app = require('express')()
const { getAllProjects, getProject, updatePorject, addProject, deleteProject } = require('../controller/projectController');

router.get('/', async(req, res) => {
    try {
        const allProject = await getAllProjects()
        res.render('index', { projects: allProject })
    } catch (error) {
        console.log(err)
    }
})


router.get('/modal/:id', async(req, res) => {
    try {

        if (req.params.id) {
            const project = await getProject(req.params.id)

            res.render(`modal`, { project: project })
        } else {
            res.status(400).send('nothing')
        }
    } catch (error) {
        console.log(err)
    }
})


router.post('/modal/update/:id', async(req, res) => {
    try {
        await updatePorject(req.params.id, req.body)

        res.redirect('/')
    } catch (err) {
        console.log(err)

    }
})


router.post('/modal', async(req, res) => {
    try {
        await addProject(req.body)

        res.redirect('/')
    } catch (err) {
        console.log(err)

    }
})

router.delete('/modal/:id', async(req, res) => {
    try {
        await deleteProject(req.params.id)

        res.redirect('/')
    } catch (err) {
        console.log(err)

    }
})

module.exports = router;