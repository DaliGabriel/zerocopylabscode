const DashboardError = ({ message }) => {
    if (!message) return null;

    return (
        <div className="text-red-500 p-4 text-center">
            {message}
        </div>
    );
};

export default DashboardError;
