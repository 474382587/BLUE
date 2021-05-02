export interface Solution {
  day: number;
  title: string;
  link: string;
  tags: string[];
  pres: string[];
  description: string;
  whys: string[];
}

export interface Solutions {
  [key: number]: Solution;
}
