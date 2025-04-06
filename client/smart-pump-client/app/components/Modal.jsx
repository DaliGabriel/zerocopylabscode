const Modal = ({ title, children, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-80 relative">
                <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">{title}</h2>
                <div className="text-gray-700 dark:text-gray-200">{children}</div>
                <button
                    onClick={onClose}
                    className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
