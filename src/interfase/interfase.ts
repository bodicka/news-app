export interface INews {
  author: string;
  category: CategoriesTypes[];
  description: string;
  status: string;
  id: string;
  image: string;
  language: string;
  published: string;
  title: string;
  url: string;
}

export interface IFilters {
  page_number: number;
  page_size: number;
  category: CategoriesTypes | null;
  keyword: string;
}

export interface PaginateProps {
  totalPages: number;
  hadlePreviosPage: () => void;
  handlePageClick: (page: number) => void;
  handleNextPage: () => void;
  currentPage: number;
}

export type ParamsType = Partial<IFilters>

export interface NewsApiResponse {
  news: INews[];
  page: number;
  status: string;
}

export type SkeletonType = 'baner' | "item";

export type DirectionType = 'row' | "column";

export interface CategoriesApiResponse {
  categories: CategoriesTypes[];
  description: string;
  status: string;
}

export type CategoriesTypes =
  | "regional"
  | "technology"
  | "lifestyle"
  | "business"
  | "general"
  | "programming"
  | "science"
  | "entertainment"
  | "world"
  | "sports"
  | "finance"
  | "academia"
  | "politics"
  | "health"
  | "opinion"
  | "food"
  | "game"
  | "fashion"
  | "academic"
  | "crap"
  | "travel"
  | "culture"
  | "economy"
  | "environment"
  | "art"
  | "music"
  | "notsure"
  | "CS"
  | "education"
  | "redundant"
  | "television"
  | "commodity"
  | "movie"
  | "entrepreneur"
  | "review"
  | "auto"
  | "energy"
  | "celebrity"
  | "medical"
  | "gadgets"
  | "design"
  | "EE"
  | "security"
  | "mobile"
  | "estate"
  | "funny";
