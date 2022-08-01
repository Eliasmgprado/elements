import { TableOfContentsItem } from '@stoplight/elements-core';
import { LayoutConfig } from '@stoplight/elements-core/types';
import { OperationNode, ServiceChildNode, ServiceNode } from '../../utils/oas/types';
export declare type TagGroup = {
    title: string;
    items: OperationNode[];
};
export declare const computeTagGroups: (serviceNode: ServiceNode) => {
    groups: TagGroup[];
    ungrouped: OperationNode[];
};
interface ComputeAPITreeConfig {
    hideSchemas?: boolean;
    hideInternal?: boolean;
}
export declare const computeAPITree: (serviceNode: ServiceNode, config?: ComputeAPITreeConfig, layoutConfig?: LayoutConfig | undefined) => TableOfContentsItem[];
export declare const findFirstNodeSlug: (tree: TableOfContentsItem[]) => string | void;
export declare const isInternal: (node: ServiceChildNode | ServiceNode) => boolean;
export {};
