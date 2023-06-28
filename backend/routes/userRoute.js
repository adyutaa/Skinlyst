import express from 'express';
import {
    getUsers,
    getUsersById,
    saveUsers,
    updateUser,
    deleteUser
} from '../controller/userController.js';

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUsersById);
router.post('/users', saveUsers);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
export default router;