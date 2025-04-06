import DashboardHeader from "./DashboardHeader";

const DashboardLayout = ({ children, name }) => (
    <>
        <DashboardHeader name={name} />
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 max-w-md mx-auto transition-colors">{children}</div>
    </>
);

export default DashboardLayout;