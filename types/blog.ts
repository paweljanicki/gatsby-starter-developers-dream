import { IFrontmatter } from './frontmatter';

export interface IBlogPostTile {
  frontmatter: IFrontmatter;
  excerpt: string;
}
