import * as React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import { MarkdownComponentsProvider } from '../components/MarkdownViewer/CustomComponents/Provider';
import { ReactRouterMarkdownLink } from '../components/MarkdownViewer/CustomComponents/ReactRouterLink';
import { useRouter } from '../hooks/useRouter';
import { RoutingProps } from '../types';
import { getDisplayName } from './utils';

export function withRouter<P extends RoutingProps>(WrappedComponent: React.ComponentType<P>): React.FC<P> {
  const WithRouter = (props: P) => {
    const basePath = props.basePath ?? '/';
    const staticRouterPath = props.staticRouterPath ?? '';
    const { Router, routerProps } = useRouter(props.router ?? 'history', basePath, staticRouterPath);
    let hasRouter = false;
    const location = useLocation();
    try {
      hasRouter = location.pathname ? true : false;
    } catch (e) {}

    console.log(hasRouter);

    const childrenComponent = React.useMemo(
      () => (
        <Routes>
          <Route
            path="/*"
            element={
              <MarkdownComponentsProvider value={{ a: ReactRouterMarkdownLink }}>
                <WrappedComponent {...props} />
              </MarkdownComponentsProvider>
            }
          />
        </Routes>
      ),
      [props],
    );

    if (hasRouter) {
      return childrenComponent;
    } else {
      return (
        <Router {...routerProps} key={basePath}>
          {childrenComponent}
        </Router>
      );
    }
  };

  WithRouter.displayName = `WithRouter(${getDisplayName(WrappedComponent)})`;

  return WithRouter;
}
