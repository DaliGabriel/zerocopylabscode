import Image from 'next/image';

const UserAvatar = ({ src = '/image.png' }) => (
    <div className="flex justify-center mb-4">
        <Image
            src={src}
            alt="User Avatar"
            width={200}
            height={200}
            className="rounded-full"
            priority
            style={{ width: "auto" }}
        />
    </div>
);

export default UserAvatar;