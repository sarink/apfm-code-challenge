import React, { HTMLProps } from 'react';

export interface ErrorSectionProps {}

export const ErrorSection: React.FC<ErrorSectionProps & HTMLProps<HTMLDivElement>> = (props) => {
  const defaultMessage = 'Something went wrong :(';
  const children = props.children || defaultMessage;
  return <div {...props}>{children}</div>;
};
