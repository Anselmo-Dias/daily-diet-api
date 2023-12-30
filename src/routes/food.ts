import { FastifyInstance } from 'fastify'
import z from 'zod'
import { prisma } from '../app'
import { checkSessionIdExists } from '../middleware/checkSessionIdExists'
import { randomUUID } from 'crypto'

interface FoodTableProps {
  name: string
  description: string
  inDiet: 'diet' | 'nodiet'
  userId: string
  sessionId: string
}

export async function foodRoutes(app: FastifyInstance) {
  app.get(
    '/:id',
    { preHandler: [checkSessionIdExists] },
    async (req, reply) => {
      const requestSchema = z.object({
        id: z.string(),
      })
      const { id } = requestSchema.parse(req.params)
      const food = await prisma.food.findMany({
        where: {
          id,
        },
      })
      return { food }
    },
  )
  app.post(
    '/foods',
    { preHandler: [checkSessionIdExists] },
    async (req, reply) => {
      try {
        const bodySchema = z
          .object({
            userId: z.string().uuid(),
          })
          .safeParse(req.body)
        if (!bodySchema.success) {
          return reply.status(400).send({ message: 'Invalid body' })
        }
        const { userId } = bodySchema.data
        const foods = await prisma.food.findMany({
          where: {
            userId,
          },
        })
        return foods
      } catch (error) {
        reply.send('Error' + error)
      }
    },
  )
  app.post('/', { preHandler: [checkSessionIdExists] }, async (req, reply) => {
    try {
      const bodySchema = z.object({
        name: z.string(),
        userId: z.string(),
        description: z.string(),
        inDiet: z.enum(['diet', 'nodiet']),
      })
      const sessionId = req.cookies.sessionId
      const { name, userId, description, inDiet } = bodySchema.parse(req.body)
      const food = await prisma.food.create({
        data: {
          name,
          description,
          inDiet,
          userId,
          sessionId,
        } as FoodTableProps,
      })
      return reply.status(201).send(food)
    } catch (error) {
      reply.send(error)
    }
  })
  app.put(
    '/:id',
    { preHandler: [checkSessionIdExists] },
    async (req, reply) => {
      try {
        const bodySchema = z.object({
          name: z.string(),
          description: z.string(),
          inDiet: z.enum(['diet', 'nodiet']),
        })
        const requestSchema = z.object({
          id: z.string(),
        })
        const { id } = requestSchema.parse(req.params)
        const { name, description, inDiet } = bodySchema.parse(req.body)
        await prisma.food.update({
          where: {
            id,
          },
          data: {
            name,
            description,
            inDiet,
          },
        })
        reply.send({ message: 'updated successfully' })
      } catch (error) {
        reply.send(error)
      }
    },
  )
  app.delete(
    '/:id',
    { preHandler: [checkSessionIdExists] },
    async (req, reply) => {
      try {
        const requestSchema = z.object({
          id: z.string(),
        })
        const { id } = requestSchema.parse(req.params)
        await prisma.food.delete({
          where: { id },
        })
        reply.status(204).send({ message: 'successfully deleted' })
      } catch (error) {
        reply.send(error)
      }
    },
  )
}
