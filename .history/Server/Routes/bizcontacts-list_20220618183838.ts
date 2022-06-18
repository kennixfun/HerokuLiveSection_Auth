import express from 'express';
const router = express.Router();

import { AuthGuard } from '../Util/index';

import { DisplayAddPage, DisplayEditPage, DisplayBizContactsList, ProcessAddPage, ProcessEditPage, ProcessDeletePage } from '../Controllers/bizcontacts-list';


/* Display Business Contact Page */
router.get('/bizcontacts-list', AuthGuard, DisplayBizContactsList);

/* Display Add Page */
router.get('/add', AuthGuard, DisplayAddPage);

/* Display Edit Page */
router.get('/edit/:id', AuthGuard, DisplayEditPage);

/* Process Add Page */
router.get('/add', AuthGuard, ProcessAddPage);

/* Process Edit Page */
router.get('/edit/:id', AuthGuard, ProcessEditPage);

/* Process Delete Page */
router.get('/delete/:id', AuthGuard, ProcessDeletePage);

export  default router;
