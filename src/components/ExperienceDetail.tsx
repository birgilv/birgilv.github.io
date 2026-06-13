import { Experience } from '../types';
import { getDateRangeLabel, getTotalDuration } from '../utils/dateUtils';

interface Props {
  roles: Experience[];
}

function ExperienceDetail({ roles }: Props) {
  if (roles.length === 0) return null;

  return (
    <div>
      <h2>{roles[0].companyName}</h2>
      <p>{getTotalDuration(roles)}</p>

      {roles.map((role, i) => (
        <div key={i} style={{ marginBottom: '1.5rem' }}>
          <h3>{role.title}</h3>
          <p>{role.type} · {getDateRangeLabel(role.startDate, role.endDate)}</p>
          <p>{role.location}</p>
          <p>{role.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ExperienceDetail;