'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getToken } from '../utils/auth';

const useAuthRedirect = ({ requireAuth = false, redirectTo = '/' }) => {
    const router = useRouter();
    const [token, setToken] = useState(null);

    useEffect(() => {
        const token = getToken();

        if (requireAuth && !token) {
            router.push('/login');
        }

        if (!requireAuth && token) {
            router.push(redirectTo);
        }

        if (!requireAuth && !token) {
            router.push('/login');
        }

        setToken(token);
    }, [requireAuth, redirectTo, router]);

    return token;
};

export default useAuthRedirect;
