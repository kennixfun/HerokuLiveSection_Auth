"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const bizContactsSchema = new Schema({
    FirstName: String,
    LastName: String,
    Company: String,
    Position: String,
    LinkedIn: String,
    Phone: String,
    sortIndex: String
}, {
    collection: "bizcontacts"
});
const Model = mongoose_1.default.model("Business Contacts", bizContactsSchema);
exports.default = Model;
//# sourceMappingURL=bizcontacts.js.map