import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme, Fade } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    page: {
      flexGrow: 1,
      padding: `0 ${theme.spacing(4)}px`,
    },
  });
});

export interface PageProps {}

export const Page: React.FC<PageProps> = (props) => {
  const classes = useStyles();
  return (
    <Fade in>
      <main className={classes.page}>{props.children}</main>
    </Fade>
  );
};
