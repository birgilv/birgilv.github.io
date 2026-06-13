import type { Education } from '../types';

interface Props {
  education: Education;
}

function EducationDetail({ education }: Props) {
  return (
    <div>
      <h2>{education.degreeTitle}</h2>
      <h3>{education.schoolName}</h3>
      <p>{typeof education.startDate === 'string' ? education.startDate : education.startDate?.toString()} - {typeof education.endDate === 'string' ? education.endDate : education.endDate?.toString() ?? 'Present'}</p>
      <p>{education.location}</p>
      <p>{education.description}</p>
    </div>
  );
}

export default EducationDetail;