import Spinner from '@/components/spinner';
import { env } from '@/env';
import { queryClient } from '@/lib/queryClient';
import { trpcClient } from '@/lib/trpcClient';
import { routeTree } from '@/routeTree.gen';
import type { AppRouter } from '@repo/api/server';
import { QueryClientProvider } from '@tanstack/react-query';
import { createRouter as createTanstackRouter } from '@tanstack/react-router';
import { createTRPCOptionsProxy } from '@trpc/tanstack-react-query';

export const trpc = createTRPCOptionsProxy<AppRouter>({
  client: trpcClient,
  queryClient,
});

export function createRouter() {
  const router = createTanstackRouter({
    routeTree,
    basepath: env.PUBLIC_BASE_PATH,
    scrollRestoration: true,
    defaultPreload: 'intent',
    defaultPendingComponent: () => <Spinner />,
    Wrap: function WrapComponent({ children }) {
      return (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      );
    },
  });
  return router;
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}
