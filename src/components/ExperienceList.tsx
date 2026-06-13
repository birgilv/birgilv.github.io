import { Experience } from '../types';
import { getDateRangeLabel, getTotalDuration } from '../utils/dateUtils';

interface Props {
  items: Experience[];
  selectedCompany: string;
  onSelect: (companyName: string) => void;
}

function ExperienceList({ items, selectedCompany, onSelect }: Props) {
  const groups = new Map<string, Experience[]>();
  for (const item of items) {
    if (!groups.has(item.companyName)) groups.set(item.companyName, []);
    groups.get(item.companyName)!.push(item);
  }

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {[...groups.entries()].map(([companyName, roles]) => {
        const isMultiple = roles.length > 1;

        return (
          <li
            key={companyName}
            onClick={() => onSelect(companyName)}
            style={{
              cursor: 'pointer',
              padding: '0.75rem',
              marginBottom: '0.5rem',
              background: companyName === selectedCompany ? '#eee' : 'transparent',
            }}
          >
            {isMultiple ? (
              <>
                <strong>{companyName}</strong>
                <span style={{ marginLeft: '0.5rem', fontSize: '0.85rem' }}>
                  {getTotalDuration(roles)}
                </span>
                <ul style={{ listStyle: 'none', padding: '0.5rem 0 0 0.75rem', margin: 0 }}>
                  {roles.map((role, i) => (
                    <li key={i} style={{ marginBottom: '0.5rem' }}>
                      <div><strong>{role.title}</strong> · {role.type}</div>
                      <div style={{ fontSize: '0.8rem' }}>{getDateRangeLabel(role.startDate, role.endDate)}</div>
                      <div style={{ fontSize: '0.8rem' }}>{role.location}</div>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <>
                <strong>{roles[0].title}</strong>
                <div>{companyName} · {roles[0].type}</div>
                <div style={{ fontSize: '0.8rem' }}>{getDateRangeLabel(roles[0].startDate, roles[0].endDate)}</div>
                <div style={{ fontSize: '0.8rem' }}>{roles[0].location}</div>
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default ExperienceList;