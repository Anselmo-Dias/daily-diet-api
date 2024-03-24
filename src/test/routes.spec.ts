import { it, expect, describe, beforeAll, afterAll } from 'vitest'
import request from 'supertest'
import { randomInt } from 'node:crypto'
import { app } from '../app'
import { send } from 'node:process'

beforeAll(async () => {
  await app.ready()
})

afterAll(async () => {
  await app.close()
})

describe('User Routes', async () => {
  it('should be to create user', async () => {
    const createUserResponse = await request(app.server)
      .post('/user/register')
      .send({
        name: 'Anselmo',
        email: 'anselmo@gmail.com',
        password: '1234567',
      })
      .expect(201)

    // const cookie = createUserResponse.get('Set-Cookie')
    // console.log(createUserResponse.body)
  })

  it('should be to list metrics this user ', async () => {
    const createUserResponse = await request(app.server)
      .post('/user/register')
      .send({
        name: 'Peter Dias',
        email: 'peter@gmail.com',
        password: '1234567',
      })
      .expect(201)

    const cookie = createUserResponse.get('Set-Cookie')
    const metricsReponse = await request(app.server)
      .get('/user/metrics')
      .set('Cookie', cookie)
      .expect(200)

    expect(metricsReponse.body).toEqual({
      quantityFood: expect.any(Number),
      diet: expect.any(Number),
      noDiet: expect.any(Number),
      sequenceDiet: expect.any(Number),
    })
  })
})

describe('Food Routes', () => {
  it('should be to create food', async () => {
    const createUserResponse = await request(app.server)
      .post('/user/register')
      .send({
        name: 'Peter Dias',
        email: `peter${randomInt(1200)}@gmail.com`,
        password: '1234567',
      })
      .expect(201)

    const cookie = createUserResponse.get('Set-Cookie')
    const { id } = createUserResponse.body

    const createFoodResponse = await request(app.server)
      .post('/food')
      .set('Cookie', cookie)
      .send({
        name: 'Frango',
        userId: id,
        description: 'Um frango gostoso, 500g',
        inDiet: 'diet',
      })
      .expect(201)

    expect(createFoodResponse.body).toEqual({
      id: expect.any(String),
      userId: expect.any(String),
      sessionId: expect.any(String),
      name: expect.any(String),
      description: expect.any(String),
      inDiet: expect.any(String),
      createAt: expect.any(String),
    })
  })

  it('should be to list foods', async () => {
    const createUserResponse = await request(app.server)
      .post('/user/register')
      .send({
        name: 'Peter Dias',
        email: `peter${randomInt(1200)}@gmail.com`,
        password: '1234567',
      })
      .expect(201)

    const cookie = createUserResponse.get('Set-Cookie')
    const id = createUserResponse.body.id

    const listFoodResponse = await request(app.server)
      .post('/food/foods')
      .send({ userId: id })
      .set('Cookie', cookie)
      .expect(200)

    expect(listFoodResponse.body).toEqual({
      foods: expect.any(Array),
    })
  })

  it('should be to list specific food', async () => {
    const createUserResponse = await request(app.server)
      .post('/user/register')
      .send({
        name: 'Peter Dias',
        email: `peter${randomInt(1200)}@gmail.com`,
        password: '1234567',
      })
      .expect(201)

    const cookie = createUserResponse.get('Set-Cookie')
    const { id } = createUserResponse.body

    const createFoodResponse = await request(app.server)
      .post('/food')
      .set('Cookie', cookie)
      .send({
        name: 'Frango',
        userId: id,
        description: 'Um frango gostoso, 500g',
        inDiet: 'diet',
      })
      .expect(201)

    const foodId = createFoodResponse.body.id

    const listFoodResponse = await request(app.server)
      .get(`/food/${foodId}`)
      .set('Cookie', cookie)
      .expect(200)

    expect(listFoodResponse.body).toEqual({
      food: expect.any(Array),
    })
  })

  it('should be to update specific food', async () => {
    const createUserResponse = await request(app.server)
      .post('/user/register')
      .send({
        name: 'Peter Dias',
        email: `peter${randomInt(1200)}@gmail.com`,
        password: '1234567',
      })
      .expect(201)

    const cookie = createUserResponse.get('Set-Cookie')
    const { id } = createUserResponse.body

    const createFoodResponse = await request(app.server)
      .post('/food')
      .set('Cookie', cookie)
      .send({
        name: 'Frango',
        userId: id,
        description: 'Um frango gostoso, 500g',
        inDiet: 'diet',
      })
      .expect(201)

    const foodId = createFoodResponse.body.id

    const updateFoodResponse = await request(app.server)
      .put(`/food/${foodId}`)
      .set('Cookie', cookie)
      .send({
        name: 'New food',
        userId: id,
        description: 'Proteinas infinitas, 50000g',
        inDiet: 'diet',
      })
      .expect(200)
  })

  it('should be to delete specific food', async () => {
    const createUserResponse = await request(app.server)
      .post('/user/register')
      .send({
        name: 'Peter Dias',
        email: `peter${randomInt(1200)}@gmail.com`,
        password: '1234567',
      })
      .expect(201)

    const cookie = createUserResponse.get('Set-Cookie')
    const { id } = createUserResponse.body

    const createFoodResponse = await request(app.server)
      .post('/food')
      .set('Cookie', cookie)
      .send({
        name: 'Frango',
        userId: id,
        description: 'Um frango gostoso, 500g',
        inDiet: 'diet',
      })
      .expect(201)

    const foodId = createFoodResponse.body.id

    const deleteFoodResponse = await request(app.server)
      .delete(`/food/${foodId}`)
      .set('Cookie', cookie)
      .expect(204)
  })
})
