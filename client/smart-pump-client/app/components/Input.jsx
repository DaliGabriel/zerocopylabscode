const Input = ({ id, type, value, onChange, label }) => (
    <div className="mb-4">
        <label htmlFor={id} className="block text-sm mb-1 text-gray-700">
            {label}
        </label>
        <input
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
        />
    </div>
);

export default Input;
