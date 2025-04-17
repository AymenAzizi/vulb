const express = require('express');
const router = express.Router()

const config = require('../../config')
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : config.MYSQL_HOST,
  port     : config.MYSQL_PORT,
  user     : config.MYSQL_USER,
  password : config.MYSQL_PASSWORD,
  database : config.MYSQL_DB_NAME,
});
 
connection.connect();

router.get('/example1/user/:id', (req,res) => {
    let userId = req.params.id;
    let query = {
        sql : "SELECT * FROM users WHERE id=" + userId
    }
    connection.query(query,(err, result) => {
        res.json(result);
    });
})

router.get('/example2/user/:id',  (req,res) => {
    let userId = req.params.id;
router.get('/example2/user/:id',  (req,res) => {
    let userId = req.params.id;
    connection.query("SELECT * FROM users WHERE id= ?", [userId],(err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Server error');
        }
router.get('/example/user/:id', (req, res) => {
    let userId = req.params.id;
    
    // Use parameterized queries with placeholders
    connection.query("SELECT * FROM users WHERE id = ?", [userId], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Server error');
        }
        res.json(result);
    });
})\n    })\n        if (err) {
            console.error(err);
            return res.status(500).send('Server error');

router.get('/example/user/:id', (req, res) => {
    let userId = req.params.id;
    
    // Use parameterized queries with placeholders
    connection.query("SELECT * FROM users WHERE id = ?", [userId], (err, result) => {
        if (err) {
    });
})


module.exports = router