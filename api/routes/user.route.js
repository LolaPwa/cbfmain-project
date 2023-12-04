import express from 'express';
import {test,  updateUser, deleteUser, getUserListings} from '../controllers/user.controller.js';
import {verifyToken} from '../utils/verifyUser.js';
const router = express.Router();

router.get('/test',test);
router.post('/update/:id', verifyToken, updateUser)
router.delete('/delete/:id', verifyToken, deleteUser)
router.post('/listings/:id', verifyToken, getUserListings)
//router.post('/:id', verifyToken, getUser)
export default router;