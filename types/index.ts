export type Category = {
  name: string;
  description: string;
  example_image?: string;
  example_description?: string;
}

export type Taxonomy = {
    name: string;
    description: string;
    categories: Category[];
}

export type DarkPatternsInfo = {
    description: string;
    image: string;
    taxonomy: Taxonomy[];
}