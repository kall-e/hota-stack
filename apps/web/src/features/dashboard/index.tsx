import { authClient } from '@/lib/authClient';
import { tweetsLinkOptions } from '@/utils/validations/tweets-link-options';
import { Link2Icon, MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { Button } from '@repo/ui/components/button';
import { Link } from '@tanstack/react-router';
import { useTheme } from 'next-themes';

export default function DashboardComponent() {
  const { data: session } = authClient.useSession();
  const { resolvedTheme, setTheme } = useTheme();

  return session?.user ? (
    <div className="flex flex-col">
      <div>
        Welcome, <span className="font-bold">{session.user.name}</span>!
      </div>
      <div className="mt-3 flex gap-x-1.5">
        Click{' '}
        <Link
          {...tweetsLinkOptions}
          className="flex items-center gap-x-1 text-blue-500 underline"
        >
          here <Link2Icon className="mt-0.5" />
        </Link>{' '}
        to view your tweets.
      </div>
      <div className="mt-3">
        For the source code, see{' '}
        <a
          className="text-blue-500 underline"
          target="_blank"
          href="https://github.com/kall-e/hota-stack"
          rel="noreferrer"
        >
          HoTa Stack on GitHub
        </a>
        .
      </div>
    </div>
  ) : (
    <div className="mt-1">
      <div>
        This is the live demo for{' '}
        <a
          className="text-blue-500 underline brightness-125"
          target="_blank"
          href="https://github.com/kall-e/hota-stack"
          rel="noreferrer"
        >
          HoTa Stack
        </a>
        .
      </div>
      <div className="mt-4">
        Please{' '}
        <Link to="/login" className="underline font-bold">
          log in
        </Link>
        .
      </div>

      <div className="mt-3 flex items-center gap-x-2">
        Toggle theme:
        <Button
          className="w-9 h-9 rounded-full border-2 border-gray-500"
          variant="ghost"
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
          {resolvedTheme === 'dark' ? (
            <MoonIcon className="text-yellow-300" />
          ) : (
            <SunIcon className="text-red-600" />
          )}
        </Button>
      </div>
    </div>
  );
}
