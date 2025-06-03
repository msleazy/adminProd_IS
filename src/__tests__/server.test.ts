import request from 'supertest'
import server from '../server'



describe('GET /api', () => {
    it('should send back a json response', async () => {
        const res = await request(server).get('/api')

        expect(res.status).toEqual(200)
        expect(res.header['content-type']).toMatch(/json/)
        expect(res.body.msg).toBe('Desde Api')

        expect(res.status).not.toBe(404)
        expect(res.body).not.toBe('desde api')
    })
})
