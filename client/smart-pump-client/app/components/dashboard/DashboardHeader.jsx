'use client';

import { removeToken } from '../../utils/auth';
import { Menu, LogOut, User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Button from '../Button';

const DashboardHeader = ({ name = 'User' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();

    const handleLogout = () => {
        removeToken();
        router.push('/login');
    };

    return (
        <header className="relative px-4 py-2 bg-gray-100">
            <div className="relative flex items-center justify-center">
                <h2 className="text-sm font-semibold text-gray-700 absolute left-1/2 transform -translate-x-1/2">
                    Hi, {name}
                </h2>

                <button
                    onClick={() => setMenuOpen((prev) => !prev)}
                    className="ml-auto text-gray-600 cursor-pointer"
                >
                    <Menu size={24} />
                </button>
            </div>

            {menuOpen && (
                <div className="absolute right-4 top-12 bg-white shadow-md border rounded-md w-40 z-10 p-2">
                    <Button
                        onClick={handleLogout}
                        className="flex items-center gap-2 text-sm justify-start px-4 py-2 w-full bg-white text-gray-700 hover:bg-gray-100"
                    >
                        <LogOut size={16} /> Logout
                    </Button>
                </div>
            )}
        </header>
    );
};

export default DashboardHeader;
