import Image from 'next/image';

const UserAvatar = ({ src = '/user.png' }) => (
    <div className="flex justify-center mb-4">
        <div className="w-32 h-32 relative">
            <Image
                src={src}
                alt="User Avatar"
                fill
                className="rounded-full object-cover bg-gray-200 dark:bg-gray-800"
                priority
            />
        </div>
    </div>
);

export default UserAvatar;