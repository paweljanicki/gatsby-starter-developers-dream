import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import '../../utils/fontawesome';
import { Header, TapBar, Footer } from '../components';
import { shortcodes } from '../../components';
import * as styles from './MainLayout.module.scss';

export const MainLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <div className={styles.MainLayout}>
      <MDXProvider components={shortcodes}>
        <Header></Header>
        {children}
        <Footer></Footer>
        <TapBar className={styles.MainLayout__tapBar}></TapBar>
      </MDXProvider>
    </div>
  );
};
