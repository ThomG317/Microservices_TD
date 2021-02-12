"use strict";
// ~/users-api/src/app.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const mysql_1 = __importDefault(require("mysql"));
const db_1 = __importDefault(require("./db"));
const app = express_1.default();
exports.app = app;
app.use(express_1.default.json());
app.get('/users', (req, res) => {
    let sql = 'SELECT * FROM user;';
    db_1.default.query(sql, (error, results, fields) => {
        if (error) {
            throw error;
        }
        else {
            console.log(results);
            res.status(200).json(results);
        }
    });
});
app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let sql = 'SELECT * FROM user WHERE id = ?;';
    let inserts = [id];
    sql = mysql_1.default.format(sql, inserts);
    db_1.default.query(sql, (error, results, fields) => {
        if (error) {
            throw error;
        }
        else {
            console.log(results);
            res.status(200).json(results[0]);
        }
    });
});
app.post('/users', (req, res) => {
    let sql = 'INSERT INTO user SET `id` = ?, `name` = ?, `email` = ?;';
    const user = req.body;
    let inserts = [user.id, user.name, user.email];
    sql = mysql_1.default.format(sql, inserts);
    db_1.default.query(sql, (error, results, fields) => {
        if (error) {
            throw error;
        }
        else {
            console.log(results);
            res.status(200).json(results);
        }
    });
});
app.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let sql = 'UPDATE user SET `name` = ?, `email` = ? where id = ?;';
    const user = req.body;
    let inserts = [user.name, user.email, id];
    sql = mysql_1.default.format(sql, inserts);
    db_1.default.query(sql, (error, results, fields) => {
        if (error) {
            throw error;
        }
        else {
            console.log(results);
            res.status(200).json(results);
        }
    });
});
app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let sql = 'DELETE FROM user WHERE id = ?;';
    let inserts = [id];
    sql = mysql_1.default.format(sql, inserts);
    db_1.default.query(sql, (error, results, fields) => {
        if (error) {
            throw error;
        }
        else {
            console.log(results);
            res.status(200).json(results);
        }
    });
});
//# sourceMappingURL=app.js.map