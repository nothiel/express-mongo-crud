const express = require('express')
const player_router = require('./routes/players')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(express.json())
app.use('/', player_router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})