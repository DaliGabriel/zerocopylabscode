'use client';

import { useRouter } from 'next/navigation';
import useAuthRedirect from '../../hooks/useAuthRedirect';
import { useDashboardData } from '../../hooks/useDashboardData';
import DashboardLoading from '../Loading';
import BalanceButton from './BalanceButton';
import BalanceModal from './BalanceModal';
import DashboardError from './DashboardError';
import DashboardLayout from './DashboardLayout';
import EditButton from './EditButton';
import EditModal from './EditModal';
import UserAvatar from './UserAvatar';
import UserInfo from './UserInfo';


const Dashboard = () => {
    const router = useRouter();
    const token = useAuthRedirect({ requireAuth: true });
    const {
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
    } = useDashboardData(token, router);

    if (error) return <DashboardError message={error} />;
    if (!data) return <DashboardLoading />;

    return (
        <DashboardLayout name={data.user.name.first}>
            <UserAvatar />
            <UserInfo
                name={`${data.user.name.first} ${data.user.name.last}`}
                email={data.user.email}
            />
            <div className="flex justify-center mb-6">
                <BalanceButton onClick={() => setIsBalanceModalOpen(true)} />
                <EditButton
                    onClick={() => {
                        setFormData(data.user);
                        setIsEditModalOpen(true);
                    }}
                />
            </div>

            {isBalanceModalOpen && (
                <BalanceModal
                    balance={balance}
                    onClose={() => setIsBalanceModalOpen(false)}
                />
            )}

            {isEditModalOpen && (
                <EditModal
                    formData={formData}
                    setFormData={setFormData}
                    onSubmit={handleUpdateUser}
                    onClose={() => setIsEditModalOpen(false)}
                />
            )}
        </DashboardLayout>
    );
};

export default Dashboard;
