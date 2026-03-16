import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from '../controller/usercontroller.js';
import { Router } from 'express';
const userRouter = Router();
userRouter.get('/', getAllUsers);
userRouter.get('/:id', getUserById);
userRouter.post('/', createUser);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser)
export {userRouter};