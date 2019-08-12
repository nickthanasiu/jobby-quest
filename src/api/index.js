import { v4 } from 'uuid';

const fakeDatabase = {
    jobs: [
        {
            id: v4(),
            url: 'https://angel.co/company/delivermyride/jobs/464988-frontend-engineer',
            company: 'Deliver My Ride',
            job_title: 'Frontend Engineer',
            'user_interest_rating': 3,
            'user_prospect_rating': 'reach',
            img_url: 'https://d1qb2nb5cznatu.cloudfront.net/startups/i/5409226-3d9ced374a8f29a478ff665a6022eb65-medium_jpg.jpg?buster=1520290239',
          },
          {
            id: v4(),
            url: 'https://angel.co/company/bestowlife/jobs/602914-front-end-software-engineer',
            company: 'Bestow',
            job_title: 'Front End Software Engineer',
            'user_interest_rating': 1,
            'user_prospect_rating': 'reach'
          },
          {
            id: v4(),
            url: 'https://angel.co/company/omnilabs/jobs/598982-senior-frontend-engineer',
            company: 'Omni Labs',
            job_title: 'Senior Frontend Engineer',
            'user_interest_rating': 2,
            'user_prospect_rating': 'reach',
            img_url: 'https://d1qb2nb5cznatu.cloudfront.net/startups/i/3244867-2236714ed69a86ce48ec381054bd397e-medium_jpg.jpg?buster=1564609823'
          }
    ],
  };

  // delay function to simulate network delay
  const delay = ms =>
    new Promise(resolve => setTimeout(resolve, ms));


  export const fetchJobs = filter =>
    delay(500).then(() => {
        // Simulate the occasional error
        if (Math.random() < 0.125) {
            throw new Error('ahh!!');
        }

        switch (filter) {
            case 'all':
                return fakeDatabase.jobs;
            default:
                throw new Error(`Unknown filter: ${filter}`);
        }
    });