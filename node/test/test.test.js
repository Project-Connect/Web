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

    test('Should return single user info', async () => {
        const response = await request(app).get('/api/users/1');
        expect(response.body.length).toBeGreaterThan(1);
        expect(response.body[0]).toMatchObject(
            {
                name: expect.any(String),
                bio: expect.any(String),
                email: expect.any(String),
                photo: expect.any(String),
                linked_in: expect.any(String),
                type: expect.any(String),
                github: expect.any(String),
            }
        )
        expect(response.statusCode).toBe(200);
    });
})

describe('Testing POST requests', () => {
    beforeAll(() => { models.sequelize.sync().then(()=>{ models.sequelize.close(); }) });

    test('Should add user to database', async () => {
        const response = await request(app).post('/api/users/student')
                                            .send({ name: 'req.body.name',
                                                    username: 'req.body.username',
                                                    bio: 'req.body.bio',
                                                    password: 'req.body.password',
                                                    email: 'req.body.email',
                                                    photo: 'req.body.photo',
                                                    linked_in: 'req.body.linked_in',
                                                    github: 'req.body.github' })
        expect(response.statusCode).toBe(200);
    });

    test('Should create or find new user', async () => {
        const response = await request(app).post('/api/user/createorfind/student')
                                            .send({ name: 'req.body.name',
                                                    username: 'req.body.username',
                                                    bio: 'req.body.bio',
                                                    password: 'req.body.password',
                                                    email: 'req.body.email',
                                                    photo: 'req.body.photo',
                                                    linked_in: 'req.body.linked_in',
                                                    github: 'req.body.github' })
        expect(response.statusCode).toBe(200);
    });

    test('Should update a single user', async () => {
        const response = await request(app).post('/api/user/update')
                                            .send({ id: 'req.body.id',
                                                    name: 'req.body.name',
                                                    bio: 'req.body.bio',
                                                    email: 'req.body.email',
                                                    photo: 'req.body.photo',
                                                    linked_in: 'req.body.linked_in',
                                                    type: 'req.body.type'
                                                    github: 'req.body.github' })
        expect(response.body.length).toBeGreaterThan(1);
        expect(response.body[0]).toMatchObject(
            {
                name: expect.any(String),
                bio: expect.any(String),
                email: expect.any(String),
                photo: expect.any(String),
                linked_in: expect.any(String),
                type: expect.any(String),
                github: expect.any(String),
            }
        )
        expect(response.statusCode).toBe(200);
    });
    
    }




})
