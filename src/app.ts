// ~/users-api/src/app.ts

import express from 'express';
import users from './users.json';
import mysql from 'mysql';
import connection from './db';

const app = express();
app.use(express.json());

app.get('/users', (req : any, res: any) => {
    let sql = 'SELECT * FROM user;';
    connection.query(sql, (error: any, results: any, fields: any) => {
        if (error) {
            throw error;
        } else {
            res.status(200).json(results);
        }
    });
});

app.get('/users/:id', (req,res) => {
    const id: number = parseInt(req.params.id);
    let sql = 'SELECT * FROM user WHERE id = ?;';
    let inserts = [id];
    sql = mysql.format(sql, inserts);
    connection.query(sql, (error: any, results: any, fields: any) => {
        if (error) {
            throw error;
        } else {
            res.status(200).json(results[0]);
        }
    });
});

app.post('/users', (req,res) => {
    let sql = 'INSERT INTO user SET `id` = ?, `name` = ?, `email` = ?;';
    const user = req.body;
    let inserts = [user.id, user.name, user.email];
    sql = mysql.format(sql, inserts);
    connection.query(sql, (error: any, results: any, fields: any) => {
        if (error) {
            throw error;
        } else {
            res.status(200).json(results);
        }
    });
});

app.put('/users/:id', (req,res) => {
    const id: number = parseInt(req.params.id);
    let sql = 'UPDATE user SET `name` = ?, `email` = ? where id = ?;';
    const user = req.body;
    let inserts = [user.name, user.email, id];
    sql = mysql.format(sql, inserts);
    connection.query(sql, (error: any, results: any, fields: any) => {
        if (error) {
            throw error;
        } else {
            res.status(200).json(results);
        }
    });
});

app.delete('/users/:id', (req,res) => {
    const id: number = parseInt(req.params.id);
    let sql = 'DELETE FROM user WHERE id = ?;';
    let inserts = [id];
    sql = mysql.format(sql, inserts);
    connection.query(sql, (error: any, results: any, fields: any) => {
        if (error) {
            throw error;
        } else {
            res.status(200).json(results);
        }
    });
});

export { app };
