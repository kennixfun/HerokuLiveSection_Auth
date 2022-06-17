import express from 'express';
const router = express.Router();

import { AuthGuard } from '../Util';

import { DisplayBizContactsList, DisplayEditPage } from '../Controllers/bizcontacts-list';

router.get('/bizcontacts-list', AuthGuard, DisplayBizContactsList);
router.get('/edit', AuthGuard, DisplayEditPage);

export  default router;
