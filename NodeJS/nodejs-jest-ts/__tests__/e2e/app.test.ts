import request from 'supertest';
import app from "../../src/app";

describe('/', () => {
    it('should return 200', async () => {
        // expect(1).toBe(1);
        await request(app)
            .get('/names')
            .expect(201);
    });
});
