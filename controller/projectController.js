const Project = require('../Model/ProjectSchema');

const getAllProjects = async() => {
    return await Project.find({});

}

const getProject = async(id) => {
    return await Project.findById(id)
}

const addProject = async(data) => {
    const { img, tags, title, demo, desc, github } = data;
    const newPorject = new Project({
        img,
        tags,
        title,
        demo,
        desc,
        github
    });

    await newPorject.save();

    return newPorject;
}


const updatePorject = async(id, data) => {
    const { img, tags, title, demo, desc, github } = data;

    const update = await Project.findByIdAndUpdate({ _id: id }, { img, title, tags, demo, desc, github }, { new: true })

    await update.save()

    return update;
}


const deleteProject = async(id) => {
    return await Project.findByIdAndDelete(id);

}


module.exports = { getAllProjects, getProject, addProject, updatePorject, deleteProject }