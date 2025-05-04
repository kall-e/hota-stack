import { Link } from '@tanstack/react-router';
import RegisterCredentialsForm from './components/register-form';

export default function RegisterComponent() {
  return (
    <div className="p-2 md:p-6 flex flex-col items-center">
      <div className="border p-4 md:p-8 w-full max-w-md rounded-lg bg-elevated">
        <RegisterCredentialsForm />
        <div className="mt-4 text-center">
          Already have an account?{' '}
          <Link to="/login" className="underline">
            Log in
          </Link>
          !
        </div>
      </div>
    </div>
  );
}
