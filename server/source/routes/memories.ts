import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'

export async function memoriesRoutes(app: FastifyInstance) {
  // listagem de memoria
  app.get('/memories', async () => {
    const memories = away prisma.memory.findMany({
      onderBy: {
        createdAt:'asc',
      }
    })
  })

  // detalhe  de memoria
  app.get('/memories/:id', async () => {})

  // criação de memoria
  app.post('/memories', async () => {})

  // atualizaçao de memoria
  app.put('/memories/:id', async () => {})

  // remover memoria
  app.delete('/memories/:id', async () => {})
}
