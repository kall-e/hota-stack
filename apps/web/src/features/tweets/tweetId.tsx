import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@repo/ui/components/tooltip';
import { Button } from '@repo/ui/components/button';
import { Link } from '@tanstack/react-router';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { tweetsLinkOptions } from '@/utils/validations/tweets-link-options';
import { Route } from '@/routes/_protected/tweets/$tweetid/index';

export default function TweetIdComponent() {
  const tweet = Route.useLoaderData();

  return (
    <div className="flex flex-col px-4 w-full max-w-6xl mx-auto break-words">
      <div className="text-center p-5 rounded-2xl">
        <h1 className="text-2xl md:text-4xl font-bold">{tweet.title}</h1>
        <p className="text-sm text-gray-500 mt-2">
          Created by <span className="font-medium">{tweet.author.name}</span>,{' '}
          {tweet.createdAt.toLocaleString()}
        </p>
      </div>
      <hr className="border border-gray-500 mt-3" />

      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              asChild
              variant="link"
              className="w-12 border border-gray-500 mt-6 hover:brightness-150"
            >
              <Link {...tweetsLinkOptions}>
                <ArrowLeftIcon />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent
            side="right"
            align="center"
            sideOffset={4}
            className="bg-neutral-500 fill-neutral-500 duration-0"
          >
            <span>View all tweets</span>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <div className="bg-elevated shadow rounded-2xl p-6 w-full min-h-96 border border-gray-500 break-words mt-6">
        <p className="leading-relaxed whitespace-break-spaces">
          {tweet.content ?? 'No content available.'}
        </p>
      </div>
    </div>
  );
}
