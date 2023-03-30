export type UserInfo = {
  email: string;
  name: string;
  username: string;
  bio: string;
  uid: string;
  data_id: string;
  photo_url: string;
};

export type Category = {
  name: string;
  description: string;
  example_image?: string;
  example_description?: string;
};

export type Taxonomy = {
  name: string;
  description: string;
  categories: Category[];
};

export type DarkPatternsInfo = {
  description: string;
  image: string;
  taxonomy: Taxonomy[];
};

export type DarkPatternType =
  | 'Nagging'
  | 'Obstruction'
  | 'Sneaking'
  | 'Interface Interference'
  | 'Forced Action';

export type DangerLevel = '1' | '2' | '3' | '4' | '5';

export type DetectedDarkPattern = {
  id?: string;
  'danger-level': string;
  description: string;
  'detected-dp-name': string;
  'dp-image-url': string;
  'dp-image-name': string;
  saved?: boolean;
  'site-link': string;
  'site-name': string;
  'user-id': string;
  date: string;
};

export type Phrase = {
  text: string;
  score: number;
};

export type AnalysisDarkPattern = {
  id?: string;
  'danger-level': string;
  'analysis-dp-name': string;
  saved?: boolean;
  'is-shared': boolean;
  'site-link': string;
  'site-name': string;
  'user-id': string;
  date: string;
  phrases: Phrase[];
};
