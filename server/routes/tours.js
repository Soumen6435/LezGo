import express from 'express';

import { getTours , createTour, getToursBySearch } from '../controllers/tours.js';

const router = express.Router();

router.get('/', getTours );

router.post('/', createTour );

router.get('/search',getToursBySearch);

export default router;