import express, { static } from 'express';
const app = express();
import { resolve } from 'path';
const PORT = process.env.PORT || 5000;

app.use(express.static('public'))

app.get('./index.html', (req, res) => {
  res.sendFile(resolve('./public/index.html'))
})

// 1) git add + commit 2) heroku create 3) git push heroku master 