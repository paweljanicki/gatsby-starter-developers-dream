import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import '../../utils/fontawesome';
import { shortcodes } from '../../components';

export const EmptyLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return <MDXProvider components={shortcodes}>{children}</MDXProvider>;
};
