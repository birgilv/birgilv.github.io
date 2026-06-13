import type { Experience } from '../types';
import { getDateRangeLabel } from '../utils/dateUtils';

interface Props {
  experience: Experience;
}

function ExperienceDetail({ experience }: Props) {
  return (
    <div>
      <h2>{experience.title}</h2>
      <h3>{experience.companyName} · {experience.type}</h3>
      <p>{getDateRangeLabel(experience.startDate, experience.endDate)}</p>
      <p>{experience.location}</p>
      <p>{experience.description}</p>
      {/* Add images here, e.g.: */}
      {/* <img src={experience.image} alt={experience.companyName} /> */}
    </div>
  );
}

export default ExperienceDetail;