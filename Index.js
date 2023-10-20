const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('Fercho/', (req, res) => {
  res.send('Andamos al cienon!')
})

app.get('Fer/', (req, res) => {
  res.send('Andamos bien!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})