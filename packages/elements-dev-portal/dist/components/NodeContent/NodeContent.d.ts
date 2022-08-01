import { CustomLinkComponent, DocsProps, ReferenceResolver } from '@stoplight/elements-core';
import { Node } from '../../types';
declare type DocsBaseProps = Pick<DocsProps, 'tryItCorsProxy' | 'tryItCredentialsPolicy'>;
declare type DocsLayoutProps = Pick<Required<DocsProps>['layoutOptions'], 'compact' | 'hideTryIt' | 'hideTryItPanel' | 'hideExport'>;
export declare type NodeContentProps = {
    node: Node;
    Link: CustomLinkComponent;
    hideMocking?: boolean;
    refResolver?: ReferenceResolver;
} & DocsBaseProps & DocsLayoutProps;
export declare const NodeContent: ({ node, Link, hideMocking, refResolver, tryItCorsProxy, tryItCredentialsPolicy, compact, hideTryIt, hideTryItPanel, hideExport, }: NodeContentProps) => JSX.Element;
export declare const getNodeUriParts: (uri: string) => {
    fileUri: string;
    pointer: string;
};
export {};
