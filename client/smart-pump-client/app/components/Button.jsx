const Button = ({ type = 'button', children, onClick, className = '' }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`w-full bg-gray-300 text-black font-semibold py-2 rounded hover:bg-gray-400 ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;