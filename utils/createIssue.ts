import { getOctokit } from '@actions/github';
import { ownerAndRepo } from '../config/index';
import type { Solution } from '../solutions/solutions';

// generate content for issues
const generateIssueContent = ({
  title,
  link,
  pres,
  description,
  whys,
}: Partial<Solution>): string => {
  return `# ${title}

## 入选理由    
${whys.reduce((acc, cur, index) => {
  return `${acc}    
${index + 1}. ${cur}`;
}, '')}

## 题目地址    
[${link}](${link})

## 前置知识    
${pres.reduce((acc, cur) => {
  return `${acc}    
- ${cur}`;
}, '')}

## 题目描述    
${description}
  `;
};

// generate issue title
const generateIssueTitle = ({ day, tags, title }: Partial<Solution>): string =>
  `【${tags[0]} - Day ${day} 】${new Date().toLocaleDateString(
    'en-CA'
  )} - ${title}`;

// get repo and owner
type OwnerAndRepo = {
  owner: string;
  repo: string;
};

const getRepoAndOwner = (useCurrentRepo: boolean = false): OwnerAndRepo => {
  if (useCurrentRepo) {
    const [owner, repo] = process.env.repository.split('/');
    return {
      owner,
      repo,
    };
  } else {
    return ownerAndRepo;
  }
};

export const createIssue = async (
  solution: Solution,
  useCurrentRepo?: boolean
): Promise<number> => {
  // Create an issue
  const octokit = getOctokit(process.env.token);
  const { owner, repo } = getRepoAndOwner(useCurrentRepo);
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
