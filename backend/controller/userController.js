import UserSchema from '../models/userModel.js';


export const getUsers = async (req, res) => {
    try {
        const users = await UserSchema.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getUsersById = async (req, res) => {
    try {
        const user = await UserSchema.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const saveUsers = async (req, res) => {
    const user = new UserSchema(req.body);
    try {
        const insertUser = await user.save();
        res.status(200).json(insertUser);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const updateUser = async (req, res) => {
    try {
        const updateUser = await UserSchema.updateOne({ _id: req.params.id }, { $set: req.body });
        res.status(200).json(updateUser);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteUser = async (req, res) => {
    try {
        const deleteUser = await UserSchema.deleteOne({ _id: req.params.id });
        res.status(200).json(deleteUser);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

