const CertificationCard = () => {
  return (
    <div className="flex flex-col justify-center gap-2 py-8">
      <div className="text-center text-2xl font-semibold">Certification</div>
      <div className="mx-8 flex flex-col gap-0.5">
        <div className="text-blue-400">2024</div>
        <div className="flex items-center gap-3 text-xl md:text-base">
          TOEIC Certificate with score 720 issued by IIG
        </div>
      </div>
      <div className="mx-8 flex flex-col gap-0.5">
        <div className="text-blue-400">2024</div>
        <div className="flex items-center gap-3 text-xl md:text-base">
          AWS Certified Solutions Architect - Associate
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;
