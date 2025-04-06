const Button = ({ type = 'button', children, onClick, className = '' }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`w-full bg-gray-300 dark:bg-gray-700 text-black dark:text-white font-semibold py-2 rounded hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;