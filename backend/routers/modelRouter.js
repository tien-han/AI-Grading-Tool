import express from 'express';
import { getModelResponse } from '../controllers/modelController.js';

const modelRouter = express.Router();

modelRouter.post('/', getModelResponse);

export default modelRouter;