import express from 'express'
const server = express()
import path from 'path';
const PORT = process.env.PORT || 5000
if (process.env.NODE_ENV === 'production') {
    server.use(express.static('dist'))
    server.get('*', (req, res) => {
        req.sendFile(path.resolve(__dirname, 'build', 'index.html'))
    })
}
server.listen(PORT, (err) => console.log(err ? err : `server up at http://localhost:${PORT}`))