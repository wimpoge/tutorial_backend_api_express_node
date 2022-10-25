const express = require('express');
const app = express()
const port = 3000
const db = require('./connection')
const response = require('./response')

app.use(express.json())

app.get('/', (req, res) => {
    db.query("SELECT * FROM tb_user", (error, result) => {
        response(200, result, 'get all users', res)
    })
    console.log(req.query)
})

app.get('/find', (req, res) => {
    console.log('find', req.query.id)

    const sql = `SELECT name FROM tb_user WHERE id = ${req.query.id}`
    db.query(sql, (error, result) => {
        response(200, result, 'find users', res)
    })
})

app.post('/login', (req, res) => {
    console.log(req.body)
    res.send('login berhasil')
})

app.patch('/username', (req, res) => {
    console.log(req.body)
    res.send('update berhasil')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})