const UserInfo = ({ name, email }) => (
    <div className="text-center mb-4">
        <h1 className="text-xl font-bold">{name}</h1>
        <p className="text-gray-600">{email}</p>
    </div>
);

export default UserInfo;