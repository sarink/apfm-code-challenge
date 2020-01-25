import { Home } from '@material-ui/icons';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

import { clientRoutes } from 'helpers/clientRoutes';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    footer: {
      flexShrink: 0,
    },
    bottomNavigationRoot: {
      width: '100%',
      height: 'auto',
      alignItems: 'center',
    },
  });
});

export interface FooterProps {}

export const Footer: React.FC<FooterProps> = (props) => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <BottomNavigation classes={{ root: classes.bottomNavigationRoot }} showLabels>
        <BottomNavigationAction
          label="Home"
          icon={<Home />}
          component={Link}
          to={clientRoutes.home()}
        />
      </BottomNavigation>
    </footer>
  );
};
