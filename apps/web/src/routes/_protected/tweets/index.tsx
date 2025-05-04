import { queryClient } from '@/lib/queryClient';
import { trpc } from '@/router';
import {
  tweetsSearchDefaults,
  tweetsSearchSchema,
} from '@/utils/validations/tweets-link-options';

import TweetsComponent from '@/features/tweets/tweets';
import {
  type SearchSchemaInput,
  createFileRoute,
  stripSearchParams,
} from '@tanstack/react-router';
import * as v from 'valibot';

export const Route = createFileRoute('/_protected/tweets/')({
  loader: () => queryClient.ensureQueryData(trpc.tweets.all.queryOptions()),
  component: TweetsComponent,
  validateSearch: (input: SearchSchemaInput) =>
    v.parse(tweetsSearchSchema, input),
  search: {
    middlewares: [stripSearchParams(tweetsSearchDefaults)],
  },
  errorComponent: ({ error }) => {
    return (
      <div className="flex flex-col items-center w-full gap-y-3">
        <div>{error.message}</div>
      </div>
    );
  },
});
