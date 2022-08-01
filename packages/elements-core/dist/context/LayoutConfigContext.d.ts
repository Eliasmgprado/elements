import React from 'react';
import { LayoutConfig } from '../types';
export declare type LayoutConfigLanguage = 'EN' | 'PT-BR';
export declare const LayoutConfigProvider: React.FC;
export declare const useLayoutConfigStarter: (userConfig?: LayoutConfig | LayoutConfigLanguage | undefined) => LayoutConfig;
export declare const useLayoutConfig: () => LayoutConfig;
