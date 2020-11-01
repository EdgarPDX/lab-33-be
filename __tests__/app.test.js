const fs = require('fs');
const pool = require('../lib/utils/pool');
const request = require('supertest');
const app = require('../lib/app');

describe('lab-33-be routes', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });

  it('creates entry journal', () => {

    
    return request(app)
      .post('/api/v1/entries')
      .send({
        journalDate:'11/1/2020',
        gratefulFor: 'Being alive',
        favoritePart: 'Eating breakfast',
        stressRating: 5,
        stressDescription: 'Woke up late and pushed up schedule',
        stressManagement: 'I will get to sleep earlier',
        procrastinationRating: 10,
        procrastinationReasoning: 'Could not come up with topic',
        procrastinationManagement: 'Will try to schedule time everyday to work on project'      
      })
      .then(res => {
        expect(res.body).toEqual({
          id: expect.any(String),
          journalDate:'11/1/2020',
          gratefulFor: 'Being alive',
          favoritePart: 'Eating breakfast',
          stressRating: 5,
          stressDescription: 'Woke up late and pushed up schedule',
          stressManagement: 'I will get to sleep earlier',
          procrastinationRating: 10,
          procrastinationReasoning: 'Could not come up with topic',
          procrastinationManagement: 'Will try to schedule time everyday to work on project'      
        });
      });
  });
});
