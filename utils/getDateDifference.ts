import { startTime } from '../config/index';

// get date difference between NOW and predefined start date
const MS_PER_DAY = 24 * 60 * 60 * 1000;
export function getDateDifference(date: number): number {
  return ((date - startTime.getTime() + MS_PER_DAY - 1) / MS_PER_DAY) >> 0;
}
