"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllLibraryStatuses = void 0;
const libraryStatus_1 = __importDefault(require("./models/libraryStatus"));
const getAllLibraryStatuses = () => {
    try {
        return libraryStatus_1.default.findAll();
    }
    catch (err) {
        console.log('ERROR - getAllLibraryStatuses: ', err);
    }
};
exports.getAllLibraryStatuses = getAllLibraryStatuses;
