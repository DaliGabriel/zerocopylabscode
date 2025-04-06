'use client';

import LoginForm from '../components/login/LoginForm';
import useAuthRedirect from '../hooks/useAuthRedirect';

const Page = () => {

    useAuthRedirect({ requireAuth: false, redirectTo: '/dashboard' });

    return <LoginForm />
}

export default Page;