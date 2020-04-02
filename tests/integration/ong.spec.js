const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach( async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll( async () => {
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                nome: "APAE 4",
                email: "apae3.canoas@apae.org",
                whatsapp: "51993903511",
                city: "Canoas",
                uf: "RS"
            });
        //console.log('Response ', response.body);

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);

    })
})