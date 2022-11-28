const express = require('express')
const fs = require('fs');
const app = express()

app.use('/', (req, res, next) => {
    fs.readFile('/dist/index.html'), (err, data) => {
        return res.send(data.replace('<div id="root"></div>', `<div id="root">`))
    }
})

app.listen(3000, () => {
    console.log("listening on http://localhost:3000");
})
