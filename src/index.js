import express from 'express'
import bodyParser from 'body-parser'
import graphqlRouter from './graphql'
import './db'

const app = express()

app.get('/', (req, res) => res.send('Let there be light!'))
app.use(bodyParser.json())
app.use(graphqlRouter())

/**
 * Normalize a port into a number, string, or false.
 */
const normalizePort = (val) => {
  var port = parseInt(val, 10);

  // named pipe
  if (isNaN(port)) return val

  // port number
  if (port >= 0) return port

  return false
}

const port = normalizePort(process.env.PORT || '3000')

app.listen(port, () => console.log('Example app listening on port 3000!'))
