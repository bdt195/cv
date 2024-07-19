import avatar from '../assets/avatar.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ProfileCard = () => {
  const socials = [
    {
      id: 'github',
      label: 'Github profile',
      icon: faGithub,
      url: 'https://github.com/bdt195',
    },
    {
      id: 'linkedin',
      label: 'Linkedin profile',

      icon: faLinkedin,
      url: 'https://linkedin.com/in/tho-bui-090870162',
    },
    {
      id: 'facebook',
      label: 'Facebook profile',

      icon: faFacebook,
      url: 'https://facebook.com/buiductho14111995',
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-6 md:p-8">
      <img
        className="h-56 w-56 rounded-full border-4 border-blue-900 object-cover md:h-48 md:w-48"
        src={avatar}
        alt="avatar"
      />
      <h1 className="text-2xl font-bold">Tho Bui Duc</h1>
      <h1 className="">Fullstack Developer</h1>
      <div className="flex gap-4">
        {socials.map((social) => (
          <a key={social.id} href={social.url} aria-label={social.label} target="_blank">
            <FontAwesomeIcon className="w-8" size="2xl" icon={social.icon} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
