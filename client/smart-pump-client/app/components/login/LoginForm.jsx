'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import Input from '../Input';
import Button from '../Button';
import ErrorAlert from './ErrorAlert';
import Layout from './Layout';
import { loginUser } from '../../services/authService';
import { setToken } from '../../utils/auth';

const LoginForm = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            const token = await loginUser(email, password);
            setToken(token);
            router.push('/dashboard');
        } catch {
            setError('Invalid credentials');
        }
    };

    return (
        <Layout>
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-xs border border-gray-300 dark:border-gray-600 rounded px-6 py-8 bg-white dark:bg-gray-900 shadow-sm"
            >
                <div className="flex flex-col items-center mb-6">
                    <Image
                        src="/logo.png"
                        alt="Smart Pump Logo"
                        width={100}
                        height={100}
                        priority
                    />
                </div>

                <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    label="Username"
                />

                <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    label="Password"
                />

                {error && <ErrorAlert error={error} />}

                <Button type="submit">LOGIN</Button>
            </form>
        </Layout>
    );
};

export default LoginForm;
