import { EnvelopeIcon, GlobeAltIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid/index.js';

const ContactCard = () => {
  const contactData = [
    { id: 'mail', value: 'buiductho195@gmail.com', icon: <EnvelopeIcon className="size-5 min-w-5" /> },
    { id: 'website', value: 'tonybthedev.com', icon: <GlobeAltIcon className="size-5 min-w-5" /> },
    {
      id: 'address',
      value: 'Khuong Dinh, Ha Dinh, Thanh Xuan, Hanoi',
      icon: <MapPinIcon className="size-5 min-w-5" />,
    },
  ];

  return (
    <div className="my-8 flex flex-col items-center justify-center gap-3">
      <div className="text-2xl font-semibold">Contact</div>
      <div className="mx-8 flex flex-col gap-3">
        {contactData.map((contact) => (
          <div key={contact.id} className="flex items-center gap-3 text-xl md:text-base">
            {contact.icon}
            <span>{contact.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactCard;
