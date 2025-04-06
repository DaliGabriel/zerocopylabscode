const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="flex flex-col items-center">
                <div className="w-8 h-8 border-4 border-gray-300 border-t-transparent rounded-full animate-spin mb-3"></div>
                <p className="text-gray-600 text-sm">Loading...</p>
            </div>
        </div>
    );
};

export default Loading;
