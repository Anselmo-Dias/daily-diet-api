import fastify from 'fastify'
import cookies from '@fastify/cookie'
import { fastifyCors } from '@fastify/cors'
import { PrismaClient } from '@prisma/client'
import { userRoutes } from './routes/user'
import { foodRoutes } from './routes/food'

export const app = fastify()
export const prisma = new PrismaClient()

app.register(fastifyCors, {
  origin: '*',
})

app.register(cookies)
app.register(userRoutes, {
  prefix: 'user',
})
app.register(foodRoutes, {
  prefix: 'food',
})
