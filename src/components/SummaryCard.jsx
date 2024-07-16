const SummaryCard = () => {
  const summaryLines = [
    '1 year of experience as a Fullstack Developer with Reacjs and Nodejs, enhancing proficiency in both frontend and\n' +
      'backend technologies.',
    'Magento 2 developer with 5 years of professional experience in all software development life cycle phases, focusing\n' +
      'on web-based client-server applications.',
    'Competent in leveraging AWS services for scalable and efficient cloud solutions.',
    'Proficient in Object-Oriented Design, data structures, problem-solving, complexity analysis and debugging, and a\n' +
      'good understanding of various design patterns.',
    'Work knowledge of Docker to develop and deploy the system.',
    'Experience in configuring and managing Linux servers.',
    'Experience using version control systems such as Git, and SVN.',
    'Ability to work independently and as part of a team with strong communication, collaboration, and analytical skills.',
  ];
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-8">
      <div className="text-2xl font-semibold">Summary</div>
      <ul className="mx-8 flex list-disc flex-col gap-0.5 sm:mx-16 2xl:mx-20">
        {summaryLines.map((line, index) => (
          <li className="list-inside" key={index}>
            {line}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SummaryCard;
