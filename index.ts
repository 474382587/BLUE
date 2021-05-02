import { getOctokit } from '@actions/github';
import { Solution, solutions as issues } from './solutions/solutions';
import {
  getDateDifference,
  generateIssueContent,
  generateIssueTitle,
  getRepoAndOwner,
} from './utils';

const current = getDateDifference(new Date().getTime());

console.log(current, ' ------------ ');

const octokit = getOctokit(process.env.token);

const createIssue = async (solution: Solution): Promise<string> => {
  // Create an issue
  const { owner, repo } = getRepoAndOwner();
  console.log({ owner, repo });

  const { data: issue } = await octokit.rest.issues.create({
    owner,
    repo,
    title: generateIssueTitle(solution),
    body: generateIssueContent(solution),
    labels: solution.tags,
  });

  console.log('issue created!', issue);
  return issue.number;
};

createIssue(issues[current]);
