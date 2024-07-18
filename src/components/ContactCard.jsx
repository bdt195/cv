import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';

const ContactCard = () => {
  const contactData = [
    {
      id: 'mail',
      value: 'buiductho195@gmail.com',
      icon: <FontAwesomeIcon className="min-h-4 min-w-4" icon={faEnvelope} />,
      onClick: () => (window.location.href = 'mailto:buiductho195@gmail.com'),
      customClassNames: 'cursor-pointer',
    },
    {
      id: 'website',
      value: 'tonybthedev.com',
      icon: <FontAwesomeIcon className="min-h-4 min-w-4" icon={faGlobe} />,
      onClick: () => window.open('https://tonybthedev.com', '_blank'),
      customClassNames: 'cursor-pointer',
    },
    {
      id: 'address',
      value: 'Khuong Dinh, Ha Dinh, Thanh Xuan, Hanoi',
      icon: <FontAwesomeIcon className="min-h-4 min-w-4" icon={faLocationDot} />,
      onClick: undefined,
      customClassNames: undefined,
    },
  ];

  return (
    <div className="my-8 flex flex-col items-center justify-center gap-3">
      <div className="text-2xl font-semibold">Contact</div>
      <div className="mx-8 flex flex-col gap-3">
        {contactData.map((contact) => (
          <div
            key={contact.id}
            onClick={contact.onClick}
            className={`flex items-center gap-3 text-xl md:text-base ${contact.customClassNames}`}
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
