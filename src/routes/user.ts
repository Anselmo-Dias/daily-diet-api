import { FastifyInstance } from 'fastify'
import z from 'zod'
import { prisma } from '../app'
import { randomUUID } from 'crypto'
import { checkSessionIdExists } from '../middleware/checkSessionIdExists'

interface FoodDietProps {
  inDiet: number
  noDiet: number
  daysInSequence: number
}

interface User {
  id: string
  name: string
  email: string
}

export async function userRoutes(app: FastifyInstance) {
  app.get('/:id', async (req, reply) => {
    try {
      const bodySchema = z.object({
        id: z.string().uuid(),
      })

      const { id } = bodySchema.parse(req.params)

      const user = await prisma.user.findUnique({
        where: {
          id,
        },
      })

      if (!user) reply.status(404).send({ message: 'User not found' })

      return reply.send({ id: user?.id, name: user?.name, email: user?.email })
    } catch (error) {
      return reply.send(error)
    }
  })

  app.post('/', async (req, reply) => {
    try {
      const bodySchema = z.object({
        email: z.string().email(),
      })

      const { email } = bodySchema.parse(req.body)

      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      })

      if (!user) reply.status(404).send({ message: 'User not found' })

      return reply.send(user)
    } catch (error) {
      return reply.send(error)
    }
  })

  app.get(
    '/metrics',
    { preHandler: [checkSessionIdExists] },
    async (req, reply) => {
      try {
        const sessionId = req.cookies.sessionId

        const foods = await prisma.food.findMany({
          where: {
            sessionId,
          },
        })
        const quantityFood = foods.length
        const foodDiet: FoodDietProps = foods.reduce(
          (acc, item) => {
            if (item.inDiet === 'diet') {
              acc.inDiet += 1
            } else {
              acc.noDiet += 1
            }

            let daysInNoDiet = 0

            if (item.inDiet === 'diet' && daysInNoDiet === 0) {
              acc.daysInSequence += 1
            } else {
              daysInNoDiet += 1
            }

            return acc
          },
          {
            inDiet: 0,
            noDiet: 0,
            daysInSequence: 0,
          },
        )

        return {
          quantityFood,
          diet: foodDiet.inDiet,
          noDiet: foodDiet.noDiet,
          sequenceDiet: foodDiet.daysInSequence,
        }
      } catch (error) {
        return reply.send(error)
      }
    },
  )

  app.post('/create', async (req, reply) => {
    try {
      const bodySchema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string(),
      })

      let sessionId = req.cookies.sessionId

      if (!sessionId) {
        sessionId = randomUUID()
        reply.cookie('sessionId', sessionId, {
          path: '/',
          maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
        })
      }

      const { name, email, password } = bodySchema.parse(req.body)

      const emailExists = await prisma.user.findUnique({
        where: {
          email,
        },
      })

      if (emailExists) {
        return reply.status(400).send({ message: 'Email already exists' })
      }

      const user = await prisma.user.create({
        data: {
          name,
          email,
          password,
        },
      })

      return reply
        .status(201)
        .send({ id: user.id, name: user.name, email: user.email })
    } catch (error) {
      return reply.status(500).send(`unexpected error: ${error}`)
    }
  })
}
