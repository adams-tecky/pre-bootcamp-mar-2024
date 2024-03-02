const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.redirect('https://docs.google.com/document/d/1-bmnK4zMP3UvO5BsTm_hskL1WsANf-Pl7Ax3JwejGnQ/edit#heading=h.s95ty480pxt6')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port} \n or through wifi: http://192.168.80.62:${port}`)
})