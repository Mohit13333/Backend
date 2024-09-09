require('dotenv').config()
// console.log(process.env)
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
    res.send('Twitter');

})
app.get('/youtube', (req, res) => {
    res.send('You are on youtube!');

})
app.get('/login', (req, res) => {
    res.send('<div><input style="background-color:black; color:white; font-size:30px; border-radius:7px" type="text" placeholder="Enter Your Email"></br><input style="background-color:black; color:white; font-size:30px; border-radius:7px" type="password" placeholder="Enter Your Password"></br><button style="background-color:black; color:white; font-size:30px; border-radius:7px; text-align:center;">Submit</div>');

})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})