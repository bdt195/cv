import ProfileCard from './components/ProfileCard.jsx';
import ContactCard from './components/ContactCard.jsx';
import EducationCard from './components/EducationCard.jsx';
import CertificationCard from './components/CertificationCard.jsx';
import SummaryCard from './components/SummaryCard.jsx';
import ExperienceCard from './components/ExperienceCard.jsx';

function App() {
  return (
    <div className="h-full bg-slate-700 font-roboto lg:grid lg:grid-cols-8 2xl:grid-cols-10">
      <div className="md:grid md:grid-cols-6 lg:col-span-6 lg:col-start-2 2xl:col-span-6 2xl:col-start-3 2xl:grid-cols-10">
        <div className="bg-blue-950 text-amber-50 md:col-span-2 2xl:col-span-3">
          <ProfileCard />

          <hr className="mx-8 my-0 h-px border-0 bg-gray-200" />
          <ContactCard />
          <hr className="mx-8 my-0 h-px border-0 bg-gray-200" />
          <EducationCard />
          <hr className="mx-8 my-0 h-px border-0 bg-gray-200" />
          <CertificationCard />
        </div>
        <div className="bg-white text-emerald-950 md:col-span-4 2xl:col-span-7">
          <SummaryCard />
          <ExperienceCard />
        </div>
      </div>
    </div>
  );
}

export default App;
