const request = require('supertest')
const app = require('../../src/app')

test('should return hello world', async () => {
 const response = await request(app).get('/api')

 expect(response.status).toEqual(200)
 expect(response.text).toEqual('<h1>Alexandre!!</h1>')
});