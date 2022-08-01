import type { IMarkdownViewerProps } from '@stoplight/markdown-viewer';
import { IHttpOperation, IHttpService, NodeType } from '@stoplight/types';
import { JSONSchema4, JSONSchema6, JSONSchema7 } from 'json-schema';
export declare type JSONSchema = JSONSchema4 | JSONSchema6 | JSONSchema7;
export declare type ParsedNode = {
    type: NodeType.Article;
    data: IMarkdownViewerProps['markdown'];
} | {
    type: NodeType.HttpOperation;
    data: IHttpOperation;
} | {
    type: NodeType.HttpService;
    data: IHttpService;
} | {
    type: NodeType.Model;
    data: JSONSchema7;
} | {
    type: NodeType.HttpServer;
    data: unknown;
} | {
    type: NodeType.Unknown;
    data: unknown;
} | {
    type: NodeType.TableOfContents;
    data: unknown;
} | {
    type: NodeType.Generic;
    data: unknown;
};
export interface INodeFilter {
    nodeUri?: string;
    nodeType?: string;
}
export interface IBranchNode {
    id: number;
    version?: string;
    isLatestVersion?: boolean;
    node: {
        id: number;
        uri: string;
    };
    snapshot: {
        id: number;
        type: string;
        name: string;
        summary?: string | null;
        data?: unknown;
        tagNames?: string[];
    };
}
export declare enum IntegrationKind {
    AzureDevopsServer = "azure_devops_server",
    BitbucketCloud = "bitbucket_cloud",
    BitbucketServer = "bitbucket_server",
    Builtin = "builtin",
    Gitea = "gitea",
    Github = "github",
    Gitlab = "gitlab",
    Ldap = "ldap",
    Saml = "saml"
}
export declare type BundledBranchNode = {
    id: number;
    data: string;
    type: NodeType;
    name: string;
    uri: string;
    summary: string;
    branchSlug: string;
    workspaceIntegration: {
        kind: IntegrationKind;
        apiUrl: string;
        hostUrl: string;
    };
    externalOrgSlug: string;
    externalSlug: string;
};
export interface ITableOfContentsTree {
    items: TableOfContentItem[];
}
export declare type TableOfContentItem = Divider | Group | Item;
export declare type Divider = {
    title: string;
    type: 'divider';
};
export declare type Group = {
    title: string;
    type: 'group';
    items: TableOfContentItem[];
    uri?: string;
};
export declare type Item = {
    title: string;
    type: 'item';
    uri: string;
};
export declare type RouterType = 'history' | 'memory' | 'hash' | 'static';
export interface RoutingProps {
    basePath?: string;
    staticRouterPath?: string;
    router?: RouterType;
}
export declare type ParamField = {
    name: string;
    description: string;
    example: string;
};
declare type ApiLayoutConfig = {
    descriptionUrlErrorTitle?: string;
    descriptionUrlError?: string;
    descriptionFileErrorTitle?: string;
    descriptionFileError?: string;
};
declare type ApiTreeLayoutConfig = {
    overview?: string;
    endpoints?: string;
    schemas?: string;
};
declare type ServerInfoLayoutConfig = {
    title?: string;
};
declare type SecuritySchemesLayoutConfig = {
    title?: string;
};
declare type AdditionalInfoLayoutConfig = {
    title?: string;
    contact?: string;
    license?: string;
    termsOfService?: string;
};
declare type OperationParametersLayoutConfig = {
    title?: string;
};
declare type TryItLayoutConfig = {
    sendApiRequest?: string;
    authTitle?: string;
    formDataBodyTitle?: string;
};
declare type RequestSamplesLayoutConfig = {
    title?: string;
};
declare type ResponseExamplesLayoutConfig = {
    title?: string;
};
declare type RequestLayoutConfig = {
    header?: string;
    pathParameters?: string;
    headerParameters?: string;
    cookiesParameters?: string;
    queryParameters?: string;
    bodyHeader?: string;
};
declare type ResponsesLayoutConfig = {
    header?: string;
    bodyHeader?: string;
};
declare type BadgesLayoutConfig = {
    deprecated?: string;
    deprecatedTip?: string;
    internal?: string;
    internalTip?: (isHttpService?: boolean) => string;
};
declare type ModelExamplesLayoutConfig = {
    title?: string;
};
export declare type LayoutConfig = {
    api?: ApiLayoutConfig;
    apiTree?: ApiTreeLayoutConfig;
    serverInfo?: ServerInfoLayoutConfig;
    securitySchemes?: SecuritySchemesLayoutConfig;
    additionalInfo?: AdditionalInfoLayoutConfig;
    operationParameters?: OperationParametersLayoutConfig;
    tryIt?: TryItLayoutConfig;
    requestSamples?: RequestSamplesLayoutConfig;
    responseExamples?: ResponseExamplesLayoutConfig;
    request?: RequestLayoutConfig;
    responses?: ResponsesLayoutConfig;
    badges?: BadgesLayoutConfig;
    modelExamples?: ModelExamplesLayoutConfig;
};
export {};
