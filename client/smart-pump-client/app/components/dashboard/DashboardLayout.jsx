import DashboardHeader from "./DashboardHeader";

const DashboardLayout = ({ children, name }) => (
    <>
        <DashboardHeader name={name} />
        <div className="min-h-screen bg-white p-4 max-w-md mx-auto">{children}</div>
    </>
);

export default DashboardLayout;