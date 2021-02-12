"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const db_1 = __importDefault(require("./db"));
const server = app_1.app.listen(5000, '0.0.0.0', () => {
    db_1.default.connect(function (err) {
        if (err) {
            throw err;
        }
        else {
            console.log("Connecté à la base de données MySQL!");
            const { port, address } = server.address();
            console.log('Server listening on:', 'http://' + address + ':' + port);
        }
    });
});
//# sourceMappingURL=index.js.map