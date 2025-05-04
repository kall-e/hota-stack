import { Button } from '@repo/ui/components/button';

export default function MaintenanceError() {
  return (
    <div className="h-svh">
      <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
        <h1 className="text-[7rem] leading-tight font-bold">503</h1>
        <span className="font-medium">Service Unavailable: The site is currently undergoing scheduled maintenance.</span>
        <p className="text-muted-foreground text-center">
          The site is temporarily unavailable due to scheduled maintenance.<br />
          Please try again later. We apologize for any inconvenience.
        </p>
        <div className="mt-6 flex gap-4">
          <Button variant="outline">Learn more</Button>
        </div>
      </div>
    </div>
  );
}
