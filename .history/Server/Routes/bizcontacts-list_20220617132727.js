"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const Util_1 = require("../Util");
const bizcontacts_list_1 = require("../Controllers/bizcontacts-list");
router.get('/bizcontacts-list', Util_1.AuthGuard, movie_list_1.DisplayBizContactsList);
exports.default = router;
//# sourceMappingURL=bizcontacts-list.js.map