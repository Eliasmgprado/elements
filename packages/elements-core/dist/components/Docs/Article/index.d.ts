import { IMarkdownViewerProps } from '@stoplight/markdown-viewer';
import * as React from 'react';
import { DocsComponentProps } from '..';
declare type ArticleProps = DocsComponentProps<IMarkdownViewerProps['markdown']>;
export declare const Article: React.FunctionComponent<ArticleProps & import("@stoplight/react-error-boundary").ErrorBoundaryProps<{}>>;
export {};
