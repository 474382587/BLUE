import { createIssue, getDateDifference, getSolutions } from './utils/index';

const current = getDateDifference(new Date().getTime());

createIssue(getSolutions('', true)[current]);
