const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/home') {
    res.end('Home page')
    return
  }

  if (req.url === '/about') {
    res.end('About page')
    return
  }

  res.writeHead(404, { 'Content-Type': 'text/html' })
  res.end(`
    <h1>Oops!</h1>
    <p>We can't find the page you are looking for</p>
    <a href='/'>back to home</a>
    `)
})

server.listen(5000)
