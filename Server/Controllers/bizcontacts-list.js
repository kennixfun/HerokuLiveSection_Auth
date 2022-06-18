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
    }).sort({ FirstName: 1 });
}
exports.DisplayBizContactsList = DisplayBizContactsList;
function DisplayAddPage(req, res, next) {
    res.render('index', { title: 'Add', page: 'edit', bizcontacts: '', displayName: (0, Util_1.UserDisplayName)(req) });
}
exports.DisplayAddPage = DisplayAddPage;
function DisplayEditPage(req, res, next) {
    let id = req.params.id;
    bizcontacts_1.default.findById(id, {}, {}, function (err, bizcontactsToEdit) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Edit', page: 'edit', bizcontacts: bizcontactsToEdit, displayName: (0, Util_1.UserDisplayName)(req) });
    });
}
exports.DisplayEditPage = DisplayEditPage;
function ProcessAddPage(req, res, next) {
    let newBizcontact = new bizcontacts_1.default({
        "FirstName": req.body.bizFirstName,
        "LastName": req.body.bizLastName,
        "EmailAddress": req.body.bizEmailAddress,
        "Phone": req.body.bizPhone
    });
    bizcontacts_1.default.create(newBizcontact, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/bizcontacts-list');
    });
}
exports.ProcessAddPage = ProcessAddPage;
function ProcessEditPage(req, res, next) {
    let id = req.params.id;
    let updateBizcontacts = new bizcontacts_1.default({
        "_id": id,
        "FirstName": req.body.bizFirstName,
        "LastName": req.body.bizLastName,
        "EmailAddress": req.body.bizEmailAddress,
        "Phone": req.body.bizPhone
    });
    bizcontacts_1.default.updateOne({ _id: id }, updateBizcontacts, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/bizcontacts-list');
    });
}
exports.ProcessEditPage = ProcessEditPage;
function ProcessDeletePage(req, res, next) {
    let id = req.params.id;
    bizcontacts_1.default.remove({ _id: id }, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/bizcontacts-list');
    });
}
exports.ProcessDeletePage = ProcessDeletePage;
//# sourceMappingURL=bizcontacts-list.js.map