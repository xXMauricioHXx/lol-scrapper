"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Http = void 0;
const axios_1 = __importDefault(require("axios"));
class Http {
    constructor() {
        this.instance = axios_1.default.create();
    }
    isNoContentStatus(result) {
        return result.status === 204;
    }
}
exports.Http = Http;
