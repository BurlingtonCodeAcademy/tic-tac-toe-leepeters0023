const express = require('express');
const app = express();
const path = require('path')
const PORT = process.env.PORT || 5000;

app.use(express.static('public'))

app.get('./index.html', (req, res) => {
  res.sendFile(path.resolve('./public/index.html'))
})

app.listen(PORT, () => {}) 
// 1) git add + commit 2) heroku create 3) git push heroku master 