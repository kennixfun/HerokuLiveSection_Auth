"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const Util_1 = require("../Util");
const bizcontacts_list_1 = require("../Controllers/bizcontacts-list");
router.get('/bizcontacts-list', Util_1.AuthGuard, bizcontacts_list_1.DisplayBizContactsList);
router.get('/add', Util_1.AuthGuard, bizcontacts_list_1.DisplayAddPage);
router.get('/edit', Util_1.AuthGuard, bizcontacts_list_1.DisplayEditPage);
router.post('/add', Util_1.AuthGuard, bizcontacts_list_1.ProcessAddPage);
router.post('/edit/:id', Util_1.AuthGuard, bizcontacts_list_1.ProcessEditPage);
router.get('/delete/:id', Util_1.AuthGuard, bizcontacts_list_1.ProcessDeletePage);
exports.default = router;
//# sourceMappingURL=bizcontacts-list.js.map