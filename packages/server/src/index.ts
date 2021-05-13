import express from 'express'
import { configServer } from './main'

const app = express()
configServer(app, '/graphql')

app.listen({ port: process.env.PORT ?? 4000 }, () => {
  console.log(`🚀 Server ready at http://localhost:4000/graphql`)
})
