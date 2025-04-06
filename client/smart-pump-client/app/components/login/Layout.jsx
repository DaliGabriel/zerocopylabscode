const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 transition-colors">
            {children}
        </div>
    );
};

export default Layout;
