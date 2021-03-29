import React from 'react';

export const ExternalLink = ({
  url,
  children,
}: {
  url: string;
  children: JSX.Element;
}): JSX.Element => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={url}>
      {children}
    </a>
  );
};
