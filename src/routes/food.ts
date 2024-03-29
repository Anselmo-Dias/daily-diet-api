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
      const food = await prisma.food.findUnique({
        where: {
          id,
        },
      })

      if (!food) reply.status(404).send({ message: 'food not found' })

      return { food }
    },
  )
  app.get(
    '/foods/:id',
    { preHandler: [checkSessionIdExists] },
    async (req, reply) => {
      try {
        const paramsSchema = z
          .object({
            id: z.string().uuid(),
          })
          .safeParse(req.params)

        if (!paramsSchema.success) {
          return reply.status(400).send({ message: 'Id is missing' })
        }

        const { id } = paramsSchema.data

        const foods = await prisma.food.findMany({
          where: {
            userId: id,
          },
        })
        return { foods }
      } catch (error) {
        reply.send('Error' + error)
      }
    },
  )
  app.post('/', { preHandler: [checkSessionIdExists] }, async (req, reply) => {
    try {
      const bodySchema = z
        .object({
          name: z.string(),
          userId: z.string(),
          description: z.string(),
          inDiet: z.enum(['diet', 'nodiet']),
        })
        .safeParse(req.body)

      const sessionId = req.cookies.sessionId

      if (!bodySchema.success) {
        return reply.status(400).send({ message: 'Missing or invalid body' })
      }

      const { name, userId, description, inDiet } = bodySchema.data
      const food = await prisma.food.create({
        data: {
          name,
          description,
          inDiet,
          userId,
          sessionId,
        } as FoodTableProps,
      })
      return reply.status(201).send({ food })
    } catch (error) {
      reply.send(error)
    }
  })
  app.put(
    '/:id',
    { preHandler: [checkSessionIdExists] },
    async (req, reply) => {
      try {
        const bodySchema = z
          .object({
            name: z.string().optional(),
            description: z.string().optional(),
            inDiet: z.enum(['diet', 'nodiet']).optional(),
          })
          .safeParse(req.body)

        const requestSchema = z
          .object({
            id: z.string().uuid(),
          })
          .safeParse(req.params)

        if (!requestSchema.success || !bodySchema.success) {
          return reply.status(400).send({ message: 'Invalid body' })
        }
        const { id } = requestSchema.data
        const { name, description, inDiet } = bodySchema.data

        const foodExists = await prisma.food.findUnique({
          where: {
            id,
          },
        })

        if (!foodExists) reply.status(404).send({ message: 'Food not found' })

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
        const requestSchema = z
          .object({
            id: z.string(),
          })
          .safeParse(req.params)

        if (!requestSchema.success) {
          return reply.status(400).send({ message: 'Id is missing' })
        }
        const { id } = requestSchema.data
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
