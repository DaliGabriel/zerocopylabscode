'use client';

import { useEffect, useState } from 'react';
import { getUserProfile, getUserBalance } from '../services/userService';
import { removeToken } from '../utils/auth';

export const useDashboardData = (token, router) => {
    const [data, setData] = useState(null);
    const [balance, setBalance] = useState(null);
    const [error, setError] = useState(null);
    const [isBalanceModalOpen, setIsBalanceModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [formData, setFormData] = useState(null);

    useEffect(() => {
        if (!token) return;

        const fetchData = async () => {
            try {
                const profile = await getUserProfile(token);
                const balance = await getUserBalance(token);
                setData(profile);
                setBalance(balance);
            } catch (err) {
                if (err.message === 'unauthorized') {
                    removeToken();
                    return router.push('/login');
                }
                setError('Failed to fetch user data');
            }
        };

        fetchData();
    }, [token, router]);

    const handleUpdateUser = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:4000/api/user/update', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    name: {
                        first: formData.name.first,
                        last: formData.name.last,
                    },
                    email: formData.email,
                }),
            });

            if (!res.ok) throw new Error('Update failed');
            const updated = await res.json();
            setData((prev) => ({ ...prev, user: updated.user }));
            setIsEditModalOpen(false);
        } catch (err) {
            alert('Error updating profile');
        }
    };

    return {
        data,
        balance,
        error,
        isBalanceModalOpen,
        isEditModalOpen,
        formData,
        setIsBalanceModalOpen,
        setIsEditModalOpen,
        setFormData,
        handleUpdateUser,
    };
};
