import { useState } from 'react';
import { experience } from '../data/experience.ts';
import ExperienceDetail from '../components/ExperienceDetail';
import ExperienceList from '../components/ExperienceList';

function ExperiencePage() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <div style={{ flex: 2 }}>
        <ExperienceDetail experience={experience[selectedIndex]} />
      </div>
      <div style={{ flex: 1 }}>
        <ExperienceList
          items={experience}
          selectedIndex={selectedIndex}
          onSelect={setSelectedIndex}
        />
      </div>
    </div>
  );
}

export default ExperiencePage;