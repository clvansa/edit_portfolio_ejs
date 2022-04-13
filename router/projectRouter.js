const router = require('express').Router();
const { getAllProjects, addProject, updatePorject, deleteProject, getProject } = require('../controller/projectController')

router.get('/', async(req, res) => {
    try {
        const allProjects = await getAllProjects()
        res.status(200).json(allProjects)
    } catch (error) {
        res.status(400).json(error)
    }
})


router.get('/:id', async(req, res) => {
    try {
        const project = await getProject(req.params.id)
        res.status(200).json(project)
    } catch (error) {
        res.status(400).json(error)
    }
})




router.post('/', async(req, res) => {
    try {
        const addNew = await addProject(req.body)
        res.status(201).json(addNew)
    } catch (error) {
        res.status(400).json(error)
    }
})

router.put('/', async(req, res) => {
    try {
        const updateProject = await updatePorject(req.body.id, req.body)
        res.status(201).json(updateProject)
    } catch (error) {
        res.status(400).json(error)
    }
})

router.delete('/', async(req, res) => {
    try {
        await deleteProject(req.body.id).then((result) => {
            if (result === null) return res.status(400).json("Project not found")
            res.status(200).json("Project has been deleted")
        })

    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router;