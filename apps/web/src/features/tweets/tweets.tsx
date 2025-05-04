import CreateTweetButton from '@/features/tweets/components/create-tweet';
import TweetItem from '@/features/tweets/components/tweet-item';
import { trpc } from '@/router';
import { Route } from '@/routes/_protected/tweets/index';
import type { TweetSearchSchema } from '@/utils/validations/tweets-link-options';
import {
  ArrowDownIcon,
  ArrowUpIcon,
  MagnifyingGlassIcon,
} from '@radix-ui/react-icons';
import { Button } from '@repo/ui/components/button';
import { Input } from '@repo/ui/components/input';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@repo/ui/components/tooltip';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';

export default function TweetsComponent() {
  const { data: tweets, isPending } = useQuery(trpc.tweets.all.queryOptions());
  const navigate = useNavigate({ from: Route.fullPath });
  const search = Route.useSearch();

  const updateFilters = (name: keyof TweetSearchSchema, value: unknown) => {
    navigate({ search: (prev) => ({ ...prev, [name]: value }) });
  };

  /**
   * You could memoize tweets, although if you use the react 19 compiler
   * it won't be necessary.
   */
  const lowercaseSearch = search.searchString.toLowerCase();
  const filteredTweet = tweets
    ?.filter((p) => p.title.toLowerCase().includes(lowercaseSearch))
    .sort((a, b) =>
      search.sortDirection === 'asc'
        ? a.createdAt.getTime() - b.createdAt.getTime()
        : b.createdAt.getTime() - a.createdAt.getTime(),
    );
  return (
    <div className="flex flex-col md:p-4 w-full max-w-6xl mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl">Tweets</h1>
        <CreateTweetButton />
      </div>
      <hr className="mt-4 border-b-2 border-gray-400" />

      <div className="mt-4 flex justify-end items-center relative gap-x-2">
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild onClick={(e) => e.preventDefault()}>
              <Button
                variant="link"
                className="w-12 border border-input hover:brightness-150"
                onClick={() =>
                  updateFilters(
                    'sortDirection',
                    search.sortDirection === 'asc' ? 'desc' : 'asc',
                  )
                }
              >
                {search.sortDirection === 'asc' ? (
                  <ArrowUpIcon />
                ) : (
                  <ArrowDownIcon />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent
              side="top"
              align="center"
              sideOffset={4}
              onPointerDownOutside={(e) => e.preventDefault()}
              className="bg-neutral-500 fill-neutral-500 duration-0"
            >
              <span>Sort by created date ({search.sortDirection})</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <div className="relative sm:max-w-64 w-full">
          <Input
            value={search.searchString}
            onChange={(e) => updateFilters('searchString', e.target.value)}
            placeholder="Search by title..."
            className="w-full pr-10 placeholder:italic peer"
          />
          <MagnifyingGlassIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-input peer-focus:text-foreground transition-colors" />
        </div>
      </div>

      <div className="flex gap-x-3 gap-y-3 flex-wrap mt-6">
        {filteredTweet?.length
          ? filteredTweet.map((t) => (
              <TweetItem key={t.id} tweet={t} disabled={isPending} />
            ))
          : 'There are no tweets available.'}
      </div>
    </div>
  );
}
