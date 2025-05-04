import GeneralError from '@/features/errors/general-error';
import NotFoundError from '@/features/errors/not-found-error';
import TweetIdComponent from '@/features/tweets/tweetId';
import { queryClient } from '@/lib/queryClient';
import { trpc } from '@/router';
import { createFileRoute } from '@tanstack/react-router';
import { notFound } from '@tanstack/react-router';
import type { TRPCClientError } from '@trpc/client';

export const Route = createFileRoute('/_protected/tweets/$tweetid/')({
  loader: async ({ params }) => {
    try {
      return await queryClient.ensureQueryData(
        trpc.tweets.one.queryOptions({ id: params.tweetid }),
      );
    } catch (error) {
      if ((error as TRPCClientError<any>).data?.code === 'NOT_FOUND') {
        throw notFound();
      }
      throw error;
    }
  },
  component: TweetIdComponent,
  notFoundComponent: NotFoundError,
  errorComponent: GeneralError,
});
