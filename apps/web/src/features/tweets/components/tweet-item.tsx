import { TrashIcon } from '@radix-ui/react-icons';
import type { AppRouter } from '@repo/api/server';
import { Link } from '@tanstack/react-router';
import type { inferRouterOutputs } from '@trpc/server';
import DeleteTweetButton from './delete-tweet';

export default function TweetItem({
  tweet,
  disabled,
}: Readonly<{
  tweet: inferRouterOutputs<AppRouter>['tweets']['all'][number];
  disabled: boolean;
}>) {
  return (
    <Link
      to="/tweets/$tweetid"
      params={{ tweetid: tweet.id }}
      className="border border-gray-500 bg-elevated p-4 w-full flex items-center justify-between gap-x-3 rounded-xl hover:brightness-90"
      disabled={disabled}
    >
      <div className="flex flex-col gap-y-1">
        <div className="text-lg font-bold line-clamp-3">{tweet.title}</div>
        <div className="italic text-sm">{tweet.createdAt.toLocaleString()}</div>
      </div>

      <DeleteTweetButton tweetId={tweet.id}>
        <TrashIcon />
      </DeleteTweetButton>
    </Link>
  );
}
