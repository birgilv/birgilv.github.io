import { useState } from 'react';
import { education } from '../data/education';
import EducationDetail from '../components/EducationDetail';
import EducationList from '../components/EducationList';

function EducationPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <div style={{ flex: 2 }}>
        <EducationDetail education={education[selectedIndex]} />
      </div>
      <div style={{ flex: 1 }}>
        <EducationList
          items={education}
          selectedIndex={selectedIndex}
          onSelect={setSelectedIndex}
        />
      </div>
    </div>
  );
}

export default EducationPage;