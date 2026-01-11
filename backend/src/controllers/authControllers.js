const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const exists = await User.findOne({ where: { email } });
        if (exists) {
            return res.status(400).json({ error: "Email sudah digunakan" });
        }

        const hashed = bcrypt.hashSync(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashed
        });

        res.json({ message: "Registrasi berhasil", user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({ error: "Email tidak ditemukan" });
        }

        const valid = bcrypt.compareSync(password, user.password);
        if (!valid) {
            return res.status(400).json({ error: "Password salah" });
        }

        const token = jwt.sign(
            { id: user.id, email: user.email },
            "SECRET",
            { expiresIn: "7d" }
        );

        res.json({
            message: "Login berhasil",
            user,
            token
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
