"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayBizContactsList = void 0;
const movie_1 = __importDefault(require("../Models/bizcontacts"));
const Util_1 = require("../Util");
function DisplayBizContactsList(req, res, next) {
    movie_1.default.find(function (err, bizContactsCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Business Contacts List', page: 'bizcontacts-list', bizcontacts: bizContactsCollection, displayName: (0, Util_1.UserDisplayName)(req) });
    });
}
exports.DisplayBizContactsList = DisplayBizContactsList;
//# sourceMappingURL=movie-list.js.map