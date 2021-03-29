import { IconName } from '@fortawesome/fontawesome-common-types';

export interface IMenuItem {
  label: string;
  path: string;
  icon: IconName;
}

export interface IIconMenuItem {
  icon: IconName;
  path: string;
}
