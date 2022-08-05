import type { LinkProps } from '@stoplight/mosaic';
import React from 'react';
// import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const externalRegex = new RegExp('^(?:[a-z]+:)?//', 'i');

export const ReactRouterMarkdownLink = ({
  title,
  to,
  href: _href,
  children,
}: Omit<LinkProps, 'target' | 'rel'> & { to?: string }) => {
  const href = to || _href;

  const isExternal = href !== undefined && externalRegex.test(href);
  if (isExternal) {
    return (
      <a target="_blank" rel="noreferrer noopener" href={href} title={title}>
        {children}
      </a>
    );
  }
  console.log(href!.substring(1));
  console.log('a');
  return (
    <Link to={href!.substring(1)} title={title}>
      {children}
    </Link>
  );
};
