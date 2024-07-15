const EducationCard = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-8">
      <div className="text-2xl font-semibold">Education</div>
      <div className="mx-8 flex flex-col gap-0.5">
        <div className="text-blue-400">2014 - 2018</div>
        <div className="flex items-center gap-3 text-xl md:text-base">Bachelor of Information Systems</div>
        <div className="flex items-center gap-3 text-base md:text-sm">UET - VNU</div>
      </div>
    </div>
  );
};

export default EducationCard;
