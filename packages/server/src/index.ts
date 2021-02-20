import express from 'express'
import { configServer } from './main'

const app = express()
const server = configServer(app)

app.listen({ port: process.env.PORT ?? 4000 }, () => {
  console.log(`🚀 Server ready at http://localhost:4000${server.apiPath}`)
})
