import { IMenuItem, IIconMenuItem } from '../types/menu';

export const MainMenuItems: IMenuItem[] = [
  {
    label: `Home`,
    path: `/`,
    icon: `home`,
  },
  {
    label: `Get Started`,
    path: `/getting-started/`,
    icon: `rocket`,
  },
  {
    label: `Docs`,
    path: `/docs/`,
    icon: `file-code`,
  },
  {
    label: `About`,
    path: `/about/`,
    icon: `question-circle`,
  },
  {
    label: `Blog`,
    path: `/blog/`,
    icon: `pen-fancy`,
  },
  {
    label: `Contact`,
    path: `/contact/`,
    icon: `envelope-open`,
  },
];

export const HeaderSocialMediaMenu: IIconMenuItem[] = [
  {
    icon: `github`,
    path: `https://github.com/paweljanicki/gatsby-starter-developers-dream`,
  },
];
