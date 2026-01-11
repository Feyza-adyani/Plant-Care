const router = require("express").Router();
const Plant = require("../models/plant");

// Ambil semua tanaman
router.get("/", async (req, res) => {
    try {
        const plants = await Plant.findAll();
        res.json(plants);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Tambah tanaman
router.post("/", async (req, res) => {
    try {
        const plant = await Plant.create(req.body);
        res.json(plant);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update tanaman
router.put("/:id", async (req, res) => {
    try {
        const plant = await Plant.findByPk(req.params.id);
        if (!plant) return res.status(404).json({ error: "Plant not found" });

        await plant.update(req.body);
        res.json(plant);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Hapus tanaman
router.delete("/:id", async (req, res) => {
    try {
        const plant = await Plant.findByPk(req.params.id);
        if (!plant) return res.status(404).json({ error: "Plant not found" });

        await plant.destroy();
        res.json({ message: "Plant deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Tandai sudah disiram
router.put("/:id/water", async (req, res) => {
    try {
        const plant = await Plant.findByPk(req.params.id);
        if (!plant) return res.status(404).json({ error: "Plant not found" });

        await plant.update({ isWatered: true });
        res.json(plant);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
