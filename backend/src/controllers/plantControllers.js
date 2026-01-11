const Plant = require('../models/plant');

exports.getPlants = async (req, res) => {
    const plants = await Plant.findAll({ where: { UserId: req.user.id }});
    res.json(plants);
};

exports.createPlant = async (req, res) => {
    const plant = await Plant.create({
        ...req.body,
        UserId: req.user.id
    });
    res.json(plant);
};

exports.updatePlant = async (req, res) => {
    await Plant.update(req.body, { where: { id: req.params.id }});
    res.json({ message: "Updated" });
};

exports.deletePlant = async (req, res) => {
    await Plant.destroy({ where: { id: req.params.id }});
    res.json({ message: "Deleted" });
};
