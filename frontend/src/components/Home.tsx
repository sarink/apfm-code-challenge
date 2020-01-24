import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    home: {
      display: 'flex',
    },
  });
});

export interface HomeProps {}

export const Home: React.FC<HomeProps> = (props) => {
  const classes = useStyles();
  return <div className={classes.home}>Home</div>;
};
