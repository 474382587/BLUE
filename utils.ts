import type { Solution } from './solutions/solutions';
import { startTime, ownerAndRepo } from './config/index';
import axios from 'axios';

// get date difference between NOW and predefined start date
const MS_PER_DAY = 24 * 60 * 60 * 1000;
export function getDateDifference(date: number): number {
  return ((date - startTime.getTime() + MS_PER_DAY - 1) / MS_PER_DAY) >> 0;
}

// generate content for issues
export const generateIssueContent = ({
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
export const generateIssueTitle = ({
  day,
  tags,
  title,
}: Partial<Solution>): string =>
  `【${tags[0]} - Day ${day} 】${new Date().toLocaleDateString(
    'en-CA'
  )} - ${title}`;

// get solutions
export const getSolutions = async (solutionsUrl: string): Promise<any> => {
  try {
    const solutions = (await axios.get(solutionsUrl)).data;
    return solutions;
  } catch (err) {
    console.log(err);
    return [];
  }
};

// get repo and owner
type OwnerAndRepo = {
  owner: string;
  repo: string;
};

export const getRepoAndOwner = (
  useCurrentRepo: boolean = false
): OwnerAndRepo => {
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
