import { getOctokit } from '@actions/github';
import * as core from '@actions/core';
import * as fs from 'fs';
const current = require('./dateCount.json').current;
import { Solution, solutions as issues } from './solutions/solutions';

type OwnerAndRepo = {
  owner: string;
  repo: string;
};

const octokit = getOctokit(core.getInput('token'));

const getRepoAndOwner = (): OwnerAndRepo => {
  const [owner, repo] = core.getInput('repository').split('/');
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
  const { data: issue } = await octokit.rest.issues.create({
    owner,
    repo,
    title,
    body,
    labels,
  });

  console.log('issue created!', issue);
  core.info(`Created issue #${issue.number}`);
  return issue.number;
};

createIssue(issues[current]);

fs.writeFileSync(
  'dateCount.json',
  JSON.stringify({
    current: current + 1,
  })
);
