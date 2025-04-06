import { render, screen } from '@testing-library/react';
import Dashboard from '../app/components/dashboard/Dashboard';

jest.mock('../app/hooks/useAuthRedirect', () => ({
    __esModule: true,
    default: () => 'mocked-token',
}));

jest.mock('next/navigation', () => ({
    useRouter: () => ({
        push: jest.fn(),
    }),
}));

jest.mock('../app/hooks/useDashboardData', () => ({
    __esModule: true,
    useDashboardData: () => ({
        data: {
            user: {
                name: { first: 'Henderson', last: 'Updated' },
                email: 'henderson.updated@geeknet.net',
            },
        },
        balance: '$3,585.69',
        error: null,
        isBalanceModalOpen: false,
        isEditModalOpen: false,
        formData: {
            name: { first: 'Henderson', last: 'Updated' },
            email: 'henderson.updated@geeknet.net',
            phone: '+1 (936) 451-3590',
            address: '121 National Drive',
        },
        setIsBalanceModalOpen: jest.fn(),
        setIsEditModalOpen: jest.fn(),
        setFormData: jest.fn(),
        handleUpdateUser: jest.fn(),
    }),
}));

describe('Dashboard Component', () => {
    it('renders user info', () => {
        render(<Dashboard />);
        expect(screen.getByText('Hi, Henderson')).toBeInTheDocument();
        expect(screen.getByText(/henderson.updated@geeknet.net/i)).toBeInTheDocument();
    });

    it('renders buttons', () => {
        render(<Dashboard />);
        expect(screen.getByRole('button', { name: /balance/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /edit/i })).toBeInTheDocument();
    });
});
