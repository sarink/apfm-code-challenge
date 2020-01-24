import { Theme } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import { Footer } from 'components/layout/Footer';
import { Header } from 'components/layout/Header';
import { clientRoutes } from 'helpers/clientRoutes';
import { Home } from 'components/Home';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    appWithStickyFooter: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100%',
    },
  });
});

export interface AppProps {}

export const App: React.FC<AppProps> = (props) => {
  const classes = useStyles({});
  const history = useHistory();

  if ((window as any).Cypress) {
    (window as any).reactRouterHistory = history;
  }

  return (
    <div className={classes.appWithStickyFooter}>
      <Header />
      <Switch>
        <Route exact path={clientRoutes.home()} component={Home} />
      </Switch>
      <Footer />
    </div>
  );
};
