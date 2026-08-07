const User = require("../models/User");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

const registerUser = async (req, res) => {

    try {

        const {
            name,
            email,
            password,
            age,
            gender,
            emergencyContact
        } = req.body;

        if (
            !name ||
            !email ||
            !password ||
            !age ||
            !gender ||
            !emergencyContact
        ) {
            return res.status(400).json({
                message: "Please fill all required fields"
            });
        }

        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            age,
            gender,
            emergencyContact
        });

        if (user) {
            return res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                age: user.age,
                gender: user.gender,
                emergencyContact: user.emergencyContact,
                token: generateToken(user._id)
            });
        }

        return res.status(400).json({
            message: "Invalid user data"
        });

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }

};

const loginUser = async (req, res) => {

    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Please enter email and password"
            });
        }

        const user = await User.findOne({ email });

        const isMatch = user && await bcrypt.compare(password, user.password);

        if (user && isMatch) {
            return res.status(200).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                age: user.age,
                gender: user.gender,
                emergencyContact: user.emergencyContact,
                token: generateToken(user._id)
            });
        }

        return res.status(401).json({
            message: "Invalid email or password"
        });

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }

};

module.exports = {
    registerUser,
    loginUser
};

