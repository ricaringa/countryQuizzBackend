"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var envvars = __importStar(require("env-var"));
var dotenv = __importStar(require("dotenv"));
// Read in the .env file if exists
dotenv.config();
exports.default = {
    app: {
        port: envvars.get('PORT').required().asPortNumber(),
        jwtSecret: envvars.get('JWT_TOKEN').required().asString(),
    },
    db: {
        host: envvars.get('DB_HOST').required().asString(),
        port: envvars.get('DB_PORT').required().asPortNumber(),
        user: envvars.get('DB_USER').required().asString(),
        pswd: envvars.get('DB_PSWD').required().asString(),
        schm: envvars.get('DB_SCHM').required().asString(),
    }
};
