"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessDeletePage = exports.ProcessEditPage = exports.ProcessAddPage = exports.DisplayEditPage = exports.DisplayAddPage = exports.DisplayBizContactsList = void 0;
const bizcontacts_1 = __importDefault(require("../Models/bizcontacts"));
const Util_1 = require("../Util");
function DisplayBizContactsList(req, res, next) {
    bizcontacts_1.default.find(function (err, bizContactsCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Business Contacts List', page: 'bizcontacts-list', bizcontacts: bizContactsCollection, displayName: (0, Util_1.UserDisplayName)(req) });
    }).sort({FirstName: 1});
}
exports.DisplayBizContactsList = DisplayBizContactsList;
function DisplayAddPage (req, res, next)
{
    res.render('index', {title: 'Add', page: 'edit', bizcontacts: '', displayName: (0, Util_1.UserDisplayName)(req)});
}
exports.DisplayAddPage = DisplayAddPage;


//# sourceMappingURL=bizcontacts-list.js.map