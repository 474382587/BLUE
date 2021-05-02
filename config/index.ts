// start time - 05-01
const startTime = new Date();
startTime.setMonth(4);
startTime.setDate(1);
startTime.setHours(0);
startTime.setMinutes(0);
startTime.setSeconds(0);

// base URL
const baseUrl = '';

// path for solutions
const solutionsUrl = '/api/v1/daily-problem';

// default owner and repo
const ownerAndRepo = {
  owner: '474382587',
  repo: 'BLUE',
};

export { baseUrl, startTime, solutionsUrl, ownerAndRepo };
