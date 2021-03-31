export interface IFrontmatter {
  title: string;
  slug: string;
  publishedTime: string;
  modifiedTime?: string;
  template?: string;
  published?: boolean;
  heroImage?: any;
  cssClasses?: string;
  comments?: boolean;
  seoTitle?: string;
  description?: string;
  author?: string;
  tags?: string[];
  featuredImage?: any;
  featuredImageAlt?: string;
}
