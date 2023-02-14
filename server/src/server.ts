import Fastify from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'

const app = Fastify()
/* banco de dados */
const prisma = new PrismaClient()

/* Para o back poder se comunicar com o front */
app.register(cors)


/* primeira rota  */
app.get('/hello', async () => {

  const habits = await prisma.habit.findMany()

  return habits

})


app.listen({
  port: 3333,
}).then(()=>{
  console.log('Http Server running!')
})