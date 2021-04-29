import { getOctokit } from '@actions/github';
import * as fs from 'fs';
import * as path from 'path';
import { Solution, solutions as issues } from './solutions/solutions';

const fileName = 'dateCount.json'
const current = require('./dateCount.json').current;
const fullPath = path.join(process.env.GITHUB_WORKSPACE, fileName);

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

console.log(fullPath)
fs.writeFileSync(
  fullPath,
  JSON.stringify({
    current: current + 1,
  })
);
