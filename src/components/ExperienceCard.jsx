const ExperienceCard = () => {
  const experienceData = [
    {
      period: 'Feb 2024 - Present',
      company: 'Avada Group',
      title: 'Fullstack Developer',
      projects: [
        {
          title: '',
          details: [
            'Write custom Shopify apps and integrate with Shopify to enhance customer experience.',
            'Technologies: Reactjs, Nodejs, Firebase.',
          ],
        },
      ],
    },
    {
      period: 'July 2022 - Jan 2024',
      company: 'SmartOSC',
      title: 'Magento 2 Developer',
      projects: [
        {
          title: 'E-Commerce System: Tops Market and Central ClubApp.',
          details: [
            'Write Magento 2 custom modules for the membership feature.',
            'Integrated Magento with 3rd party API.',
            'Meeting with client to define requirements.',
            'Technical support and troubleshooting to clients and end users.',
          ],
        },
        {
          title: 'E-Commerce Website: Jaspal Group.',
          details: ['Integration and writing custom modules to integrate the websites with\n' + 'Google Analytics 4.'],
        },
      ],
    },
    {
      period: 'Apr 2020 - July 2022',
      company: 'BSS Group',
      title: 'Magento 2 Developer',
      projects: [
        {
          title: '',
          details: [
            'E-Commerce Websites: GlassesGallery, PixePrint and PixePrint Marketplace,\n' +
              'LogicVapes and Nordicspirit, Successori Bernagozzi.',
            "Customized Magento's features based on client needs.",
            'Downgrade Magento from EE to CE',
            'Integrated Magento with 3rd party API.',
            'Integrated Marketplace extension and customization.',
            'Technical support and trouble-shooting to clients and end users.',
          ],
        },
      ],
    },
    {
      period: 'Jan 2018 - Mar 2020',
      company: 'Brainos Solution .Ltd',
      title: 'Magento 2 Developer',
      projects: [
        {
          title: '',
          details: [
            'E-Commerce Website: leestyle.vn',
            'Designed, built, tested and implemented modules for Magento 2.',
            "Customized Magento's features based on client needs.",
            'Technical support and trouble-shooting to clients and end users.',
            'Training for new members of the team.',
          ],
        },
      ],
    },
    {
      period: 'Apr 2017 - Oct 2017',
      company: 'Brainos Solution .Ltd',
      title: 'Internship Magento 2 Developer',
      projects: [],
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-8">
      <div className="text-2xl font-semibold">Experience</div>
      <div className="mx-8 flex flex-col gap-4 sm:mx-16 2xl:mx-20">
        {experienceData.map((experience, index) => (
          <div className="" key={index}>
            <div className="text-blue-800">{experience.period}</div>
            <div className="text-lg font-semibold">{experience.company}</div>
            <div className="italic">{experience.title}</div>
            {experience.projects.map((project, index) => (
              <div key={index}>
                {project.title && <div>{project.title}</div>}
                <ul className="list-inside list-disc">
                  {project.details.map((line, index) => (
                    <li key={index}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
