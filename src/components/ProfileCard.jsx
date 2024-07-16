import avatar from '../assets/avatar.webp';

const ProfileCard = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-6 md:p-8">
      <img
        className="h-56 w-56 rounded-full border-4 border-blue-900 object-cover md:h-48 md:w-48"
        src={avatar}
        alt="avatar"
      />
      <h1 className="text-2xl font-bold">Tho Bui Duc</h1>
      <h1 className="">Fullstack Developer</h1>
    </div>
  );
};

export default ProfileCard;
