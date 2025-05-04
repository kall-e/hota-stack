import DashboardComponent from '@/features/dashboard';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: DashboardComponent,
});
