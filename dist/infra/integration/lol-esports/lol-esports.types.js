"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VodGameState = exports.VodMatchStrategy = exports.Dragon = exports.GameState = exports.Role = void 0;
var Role;
(function (Role) {
    Role["TOP"] = "top";
    Role["JUNGLE"] = "jungle";
    Role["MID"] = "mid";
    Role["BOTTOM"] = "bottom";
    Role["SUPPORT"] = "support";
})(Role = exports.Role || (exports.Role = {}));
var GameState;
(function (GameState) {
    GameState["IN_GAME"] = "in_game";
    GameState["FINISHED"] = "finished";
})(GameState = exports.GameState || (exports.GameState = {}));
var Dragon;
(function (Dragon) {
    Dragon["INFERNAL"] = "infernal";
    Dragon["MOUNTAIN"] = "mountain";
    Dragon["CLOUD"] = "cloud";
})(Dragon = exports.Dragon || (exports.Dragon = {}));
var VodMatchStrategy;
(function (VodMatchStrategy) {
    VodMatchStrategy["BEST_OF"] = "bestOf";
})(VodMatchStrategy = exports.VodMatchStrategy || (exports.VodMatchStrategy = {}));
var VodGameState;
(function (VodGameState) {
    VodGameState["COMPLETED"] = "completed";
})(VodGameState = exports.VodGameState || (exports.VodGameState = {}));
