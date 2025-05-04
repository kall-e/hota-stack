import { useNavigate, useRouter } from '@tanstack/react-router';
import { Button } from '@repo/ui/components/button';

export default function NotFoundError() {
  const navigate = useNavigate();
  const { history } = useRouter();
  return (
    <div className="h-svh">
      <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
        <h1 className="text-[7rem] leading-tight font-bold">404</h1>
        <span className="font-medium">
          Page Not Found: The requested page could not be located.
        </span>
        <p className="text-muted-foreground text-center">
          The page you are looking for does not exist. Please check the URL or return to the homepage.
        </p>
        <div className="mt-6 flex gap-4">
          <Button variant="outline" onClick={() => history.go(-1)}>
            Go Back
          </Button>
          <Button onClick={() => navigate({ to: '/' })}>Back to Home</Button>
        </div>
      </div>
    </div>
  );
}
