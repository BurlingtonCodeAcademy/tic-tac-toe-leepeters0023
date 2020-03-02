const express = require('express')
const app = express();
const PORT = process.env.PORT || 5000
app.use(express.static('/public'))


// 1) git add + commit 2) heroku create 3) git push heroku master 