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
exports.LolEsportsHttpIntegration = void 0;
const http_1 = require("../http");
class LolEsportsHttpIntegration extends http_1.Http {
    getWindowData(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { gameId, startingTime } = data;
            const result = yield this.instance.get(`https://feed.lolesports.com/livestats/v1/window/${gameId}?startingTime=${startingTime}`);
            if (this.isNoContentStatus(result)) {
                return null;
            }
            return result.data;
        });
    }
    getVodList(tournamentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.instance.get(`https://esports-api.lolesports.com/persisted/gw/getVods?hl=pt-BR&tournamentId=${tournamentId}`, {
                headers: {
                    'x-api-key': '0TvQnueqKa5mxJntVWt0w4LpLfEkrV1Ta8rQBb9Z',
                },
            });
            if (this.isNoContentStatus(result)) {
                return null;
            }
            return result.data;
        });
    }
}
exports.LolEsportsHttpIntegration = LolEsportsHttpIntegration;
