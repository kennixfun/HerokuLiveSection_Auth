import express from 'express';
const router = express.Router();

import { AuthGuard } from '../Util';

import { DisplayBizContactsList } from '../Controllers/bizcontacts-list';

router.get('/movie-list', AuthGuard, DisplayBizContactsList);

export  default router;
