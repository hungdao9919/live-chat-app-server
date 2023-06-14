const express = require('express')
const app = express()
const port = 3000
const http = require('http')
const server = http.createServer(app)
const {Server} = require('socket.io')
const io = new Server(server)
app.get('/', (req,res)=>{
    res.json({'message':'hihihihhihi'})
})
server.listen(port,()=>{
    console.log(`server listening on port ${port}`)
})