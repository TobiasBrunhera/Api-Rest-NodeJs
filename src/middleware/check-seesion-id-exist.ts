import { FastifyReply } from 'fastify'
import { FastifyRequest } from 'fastify/types/request'

export async function checkSessionIdExist(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const sessionId = request.cookies.sessionId

  if (!sessionId) {
    return reply.status(401).send({
      erro: 'Unauthorized!',
    })
  }
}
