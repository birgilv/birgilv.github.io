import { useState } from 'react';
import { experience } from '../data/experience';
import ExperienceDetail from '../components/ExperienceDetail';
import ExperienceList from '../components/ExperienceList';

function ExperiencePage() {
  const [selectedGroup, setSelectedGroup] = useState(experience[0].companyName);

  const roles = experience.filter((e) => e.companyName === selectedGroup);

  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <div style={{ flex: 2 }}>
        <ExperienceDetail roles={roles} />
      </div>
      <div style={{ flex: 1 }}>
        <ExperienceList
          items={experience}
          selectedCompany={selectedGroup}
          onSelect={setSelectedGroup}
        />
      </div>
    </div>
  );
}

export default ExperiencePage;