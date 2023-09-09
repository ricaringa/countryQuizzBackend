"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// @ts-ignore
var cors_1 = __importDefault(require("cors"));
// import router from "./routes";
var passport_1 = __importDefault(require("passport"));
var env_1 = __importDefault(require("./utils/env"));
var app = (0, express_1.default)();
app.use(passport_1.default.initialize());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// app.use(router);
app.get('/', function (req, res) {
    res.send('Server Running');
});
app.listen(env_1.default.app.port, function () { return console.log("\u26A1\uFE0F[server]: Server listening at port ".concat(env_1.default.app.port)); });
