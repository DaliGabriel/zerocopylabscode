const Input = ({ id, type, value, onChange, label }) => (
    <div className="mb-4">
        <label htmlFor={id} className="block text-sm mb-1 text-gray-700 dark:text-gray-300">
            {label}
        </label>
        <input
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
            required
        />
    </div>
);

export default Input;
