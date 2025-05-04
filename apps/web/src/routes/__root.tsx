import NavContainer from '@/components/layout/nav/nav-container';
import { Navbar } from '@/components/layout/nav/navbar';
import Spinner from '@/components/spinner';
import { authClient } from '@/lib/authClient';
import { Toaster } from '@repo/ui/components/sonner';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import React from 'react';
import { NavigationProgress } from '@/components/navigation-progress';

export const Route = createRootRoute({
  component: RootComponent,
});

// https://tanstack.com/router/v1/docs/framework/react/devtools
const TanStackRouterDevtools = import.meta.env.PROD
  ? () => null
  : React.lazy(() =>
      import('@tanstack/router-devtools').then((res) => ({
        default: res.TanStackRouterDevtools,
      })),
    );

const ReactQueryDevtools = import.meta.env.PROD
  ? () => null
  : React.lazy(() =>
      import('@tanstack/react-query-devtools').then((res) => ({
        default: res.ReactQueryDevtools,
      })),
    );

function RootComponent() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <NavContainer>
        <Spinner />
      </NavContainer>
    );
  }

  return (
    <>
      <NavigationProgress />
      <Navbar session={session} />
      <Toaster />
      <div className="p-2 md:p-4">
        <Outlet />
      </div>
      <React.Suspense>
        <ReactQueryDevtools buttonPosition="bottom-left" />
        <TanStackRouterDevtools position="bottom-right" />
      </React.Suspense>
    </>
  );
}
