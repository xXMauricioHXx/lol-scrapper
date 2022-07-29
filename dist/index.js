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
const lol_esports_1 = require("./infra/integration/lol-esports/lol-esports");
const tournamentId = '108211865716506571';
const integration = new lol_esports_1.LolEsportsHttpIntegration();
setImmediate(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield integration.getVodList(tournamentId);
        if (!result) {
            return;
        }
        const eventsOfWeekSix = result.data.schedule.events.filter((event) => event.blockName === 'Semana 6');
        const [firstEvent] = eventsOfWeekSix;
        console.log(firstEvent);
    }
    catch (err) {
        console.error(err);
        throw err;
    }
}));
