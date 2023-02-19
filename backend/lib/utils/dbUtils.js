"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = exports.initDBConnection = void 0;
const mysqlDbHelper_1 = require("./db/mysqlDbHelper");
Object.defineProperty(exports, "authenticate", { enumerable: true, get: function () { return mysqlDbHelper_1.authenticate; } });
Object.defineProperty(exports, "initDBConnection", { enumerable: true, get: function () { return mysqlDbHelper_1.initDBConnection; } });
