import axios from 'axios';
import { mockSolutions } from '../solutions/mockSolutions';
import { Solutions } from './../solutions/solutions.d';

// get solutions
export const getSolutions = async (
  solutionsUrl: string,
  devMode?: boolean
): Promise<Solutions> => {
  if (devMode) {
    return mockSolutions;
  }
  try {
    const solutions: Solutions = (await axios.get(solutionsUrl)).data;
    return solutions;
  } catch (err) {
    console.log(err);
    return {};
  }
};
