import RegisterComponent from '@/features/auth/register';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_public/register')({
  component: RegisterComponent,
});
