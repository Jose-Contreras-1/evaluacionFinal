"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const healthRoutes_1 = __importDefault(require("./healthRoutes"));
const animeRoutes_1 = __importDefault(require("./animeRoutes"));
const authRoutes_1 = __importDefault(require("./authRoutes"));
const tokenValidator_1 = __importDefault(require("../middlewares/tokenValidator"));
const apiRoutes = (0, express_1.Router)();
apiRoutes.use('/', healthRoutes_1.default);
apiRoutes.use('/anime', (0, tokenValidator_1.default)(), animeRoutes_1.default);
apiRoutes.use('/auth', authRoutes_1.default);
exports.default = apiRoutes;
