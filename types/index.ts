export type Post = {
  id: number;
  dpName: 'HIDDEN_COSTS';
  website: string;
  siteName: string;
  date: string;
  dangerLevel: 1 | 2 | 3 | 4 | 5;
  type: 0 | 1;
  description: string;
  comments: Comment[];
  showMore?: boolean;
};

export type Comment = {
  id: number;
  text: string;
  user: User;
  likes: number;
};

export type User = {
  name: string;
};

export type Image = {
  lastModified: number;
  lastModifiedDate?: Date;
  name: string;
  path: string;
  size: number;
  type: string;
  webkitRelativePath: string;
};

