import { createIssue, getDateDifference, getSolutions } from './utils/index';

const run = async () => {
  const current = getDateDifference(new Date().getTime());
  const solutions = await getSolutions('', true);

  createIssue(solutions[current], false);
};

run();
