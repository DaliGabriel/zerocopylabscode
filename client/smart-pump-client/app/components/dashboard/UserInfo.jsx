const UserInfo = ({ name, email }) => (
    <div className="text-center mb-4">
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">{name}</h1>
        <p className="text-gray-600 dark:text-gray-400">{email}</p>
    </div>
);

export default UserInfo;