import express from 'express'
import { configServer } from './main'

const app = express()
configServer(app, '/')

export default app
