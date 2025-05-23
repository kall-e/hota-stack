import LoginComponent from '@/features/auth/login';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_public/login')({
  component: LoginComponent,
});
