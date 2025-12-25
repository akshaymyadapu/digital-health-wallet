const db = require("../models");
const User = db.user;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;

        if (!fullName || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
        return res.status(409).json({ message: "Email already registered" });
    }

    const hashedPassword = bcrypt.hashSync(password, 8);

    const user = await User.create({
        fullName,
        email,
        password: hashedPassword,
        role: "OWNER"
    });

    return res.status(201).json({ message: "User registered successfully" });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Registration failed" });
    }
};

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) {
        return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
        { id: user.id, role: user.role },
        process.env.JWT_SECRET || "health-wallet-secret",
        { expiresIn: "24h" }
    );

    return res.status(200).json({
        token,
        user: {
            id: user.id,
            fullName: user.fullName,
            email: user.email,
            role: user.role
        }
    });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Login failed" });
    }
};
