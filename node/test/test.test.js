const request = require('supertest');
const app = require('../app')
const models = require('../server/models');
describe('Testing GET requests', () => {
    //This is needed to ensure jest doesn't hang
    beforeAll(() => { models.sequelize.sync().then(()=>{ models.sequelize.close(); }) });

    test('Root should return status 200', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });

    test('Should return list of all users', async () => {
        const response = await request(app).get('/api/users');
        expect(response.body.length).toBeGreaterThan(1);
        expect(response.body[0]).toMatchObject(
          {
                id: expect.any(Number),
                username: expect.any(String),
                name: expect.any(String),
                bio: expect.any(String)
          }
        )
        expect(response.statusCode).toBe(200);
    });

    test('Should return list of all projects', async () => {
        const response = await request(app).get('/api/projects');
        expect(response.body.length).toBeGreaterThan(1);
        expect(response.body[0]).toMatchObject(
            {
                id: expect.any(Number),
                name: expect.any(String),
                description: expect.any(String),
                project_start_date: expect.any(String)
            }
        )
        expect(response.statusCode).toBe(200);
    });

    test('Should return all user associations for a project', async () => {
        const response = await request(app).get('/api/user_associations/project/3')
        expect(response.body.length).toBeGreaterThan(1);
        expect(response.body[0]).toMatchObject(
            {
                id: expect.any(Number),
                status: expect.any(String),
                user_id: expect.any(Number)
            }
        )
        expect(response.statusCode).toBe(200);
    });

    test('Should return all user associations for a project based on status', async () => {
        const response = await request(app).get('/api/user_associations/project/3/approved')
        expect(response.body.length).toBeGreaterThan(1);
        expect(response.body[0]).toMatchObject(
            {
                id: expect.any(Number),
                status: expect.any(String),
                user_id: expect.any(Number)
            }
        )
        expect(response.statusCode).toBe(200);
    });
})
