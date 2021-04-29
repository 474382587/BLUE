import { getOctokit } from '@actions/github';
import { Solution, solutions as issues } from './solutions/solutions';
import * as moment from 'moment';

const start = moment.utc(process.env.start); // start date
const now = moment.utc(); //todays date
const duration = moment.duration(now.diff(start));
const current = Math.ceil(duration.asDays());
console.log(current, ' ------------ ');

type OwnerAndRepo = {
  owner: string;
  repo: string;
};

console.log('token');

const octokit = getOctokit(process.env.token);
const getRepoAndOwner = (): OwnerAndRepo => {
  const [owner, repo] = process.env.repository.split('/');
  return {
    owner,
    repo,
  };
};

const createIssue = async ({
  description: body,
  tags: labels,
  title,
}: Solution): Promise<string> => {
  // Create an issue
  const { owner, repo } = getRepoAndOwner();
  console.log({ owner, repo });
  const { data: issue } = await octokit.rest.issues.create({
    owner,
    repo,
    title,
    body,
    labels,
  });

  console.log('issue created!', issue);
  return issue.number;
};

createIssue(issues[current]);
