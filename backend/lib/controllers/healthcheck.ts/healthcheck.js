"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthCheck = void 0;
const dbUtils_1 = require("../../utils/dbUtils");
const healthCheck = () => __awaiter(void 0, void 0, void 0, function* () {
    const connectionObj = (0, dbUtils_1.initDBConnection)();
    try {
        yield connectionObj.authenticate();
        console.log('healthCheck: Authenticate success');
        return 'healthCheck: Authenticate success';
    }
    catch (err) {
        console.log('healthCheck: error', err);
        return `healthCheck: error ${err}`;
    }
    return 'healthCheck: end';
});
exports.healthCheck = healthCheck;
