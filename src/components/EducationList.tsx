import type { Education } from '../types';

interface Props {
  items: Education[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}

function EducationList({ items, selectedIndex, onSelect }: Props) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {items.map((item, i) => (
        <li
          key={i}
          onClick={() => onSelect(i)}
          style={{
            cursor: 'pointer',
            padding: '0.5rem',
            background: i === selectedIndex ? '#eee' : 'transparent',
          }}
        >
          <strong>{item.degreeTitle}</strong>
          <div>{item.schoolName}</div>
          <small>{String(item.startDate)} - {String(item.endDate) ?? 'Present'}</small>
        </li>
      ))}
    </ul>
  );
}

export default EducationList;