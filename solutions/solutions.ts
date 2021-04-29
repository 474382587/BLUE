export interface Solution {
  day: number;
  title: string;
  link: string;
  tags: string[];
  pres: string[];
  description: string;
}

export interface Solutions {
  [key: number]: Solution;
}

export const solutions: Solutions = {
  1: {
    day: 1,
    title: '66. 加一',
    link: 'https://leetcode-cn.com/problems/plus-one',
    tags: ['基础篇', '数组'], // 目前所有 README 都是没有的。因此如果没有的话，你可以先不返回，有的话就返回。后面我慢慢补
    pres: ['数组的遍历(正向遍历和反向遍历)'],
    description: `
  给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
  
  最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
  
  你可以假设除了整数 0 之外，这个整数不会以零开头。
  
  示例 1:
  
  输入: [1,2,3]
  输出: [1,2,4]
  解释: 输入数组表示数字 123。
  示例 2:
  
  输入: [4,3,2,1]
  输出: [4,3,2,2]
  解释: 输入数组表示数字 4321。
      `,
  },
  2: {
    day: 2,
    title: '222222222',
    link: '222https://leetcode-cn.com/problems/plus-one',
    tags: ['基础篇', '数组'], // 目前所有 README 都是没有的。因此如果没有的话，你可以先不返回，有的话就返回。后面我慢慢补
    pres: ['数组的遍历(正向遍历和反向遍历)'],
    description: `
  给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
  
  最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
  
  你可以假设除了整数 0 之外，这个整数不会以零开头。
  
  示例 1:
  
  输入: [1,2,3]
  输出: [1,2,4]
  解释: 输入数组表示数字 123。
  示例 2:
  
  输入: [4,3,2,1]
  输出: [4,3,2,2]
  解释: 输入数组表示数字 4321。
      `,
  },
};