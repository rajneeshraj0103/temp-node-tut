// npm global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// gloabal dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packaheName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
    res.end('welcome')
})

server.listen(5000)