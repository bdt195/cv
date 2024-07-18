import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';

const ContactCard = () => {
  const contactData = [
    { id: 'mail', value: 'buiductho195@gmail.com', icon: <EnvelopeIcon className="size-5 min-w-5" /> },
    { id: 'website', value: 'tonybthedev.com', icon: <GlobeAltIcon className="size-5 min-w-5" /> },
    {
      id: 'mail',
      value: 'buiductho195@gmail.com',
      icon: <FontAwesomeIcon className="min-h-4 min-w-4" icon={faEnvelope} />,
    },
    {
      id: 'website',
      value: 'tonybthedev.com',
      icon: <FontAwesomeIcon className="min-h-4 min-w-4" icon={faGlobe} />,
    },
    {
      id: 'address',
      value: 'Khuong Dinh, Ha Dinh, Thanh Xuan, Hanoi',
      icon: <MapPinIcon className="size-5 min-w-5" />,
      icon: <FontAwesomeIcon className="min-h-4 min-w-4" icon={faLocationDot} />,
    },
  ];

  return (
    <div className="my-8 flex flex-col items-center justify-center gap-3">
      <div className="text-2xl font-semibold">Contact</div>
      <div className="mx-8 flex flex-col gap-3">
        {contactData.map((contact) => (
          <div key={contact.id} className="flex items-center gap-3 text-xl md:text-base">
          <div
            key={contact.id}
          >
            {contact.icon}
            <span>{contact.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactCard;
