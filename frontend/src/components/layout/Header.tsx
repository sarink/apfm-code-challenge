import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    logo: {
      marginRight: theme.spacing(),
    },
    header: {
      padding: theme.spacing(3),
      display: 'flex',
      alignItems: 'center',
    },
  });
});

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = (props) => {
  const classes = useStyles();
  return (
    <header className={classes.header} data-test="Header">
      <Typography variant="h5">Trivia!</Typography>
    </header>
  );
};
