export interface BasicOpenGraphConfig {
  type: 'website' | 'article';
  url: string;
  title: string;
  description: string;
  images?: {
    url: string;
    width: number;
    height: number;
    alt: string;
  }[];
}

export interface ArticleOpenGraphConfig extends BasicOpenGraphConfig {
  article: {
    publishedTime: string;
    modifiedTime?: string;
    tags?: string[];
    authors: string[];
  };
}
