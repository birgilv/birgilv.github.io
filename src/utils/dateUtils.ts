export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export function getDuration(startDate: Date, endDate?: Date): string {
  const end = endDate ?? new Date();
  let years = end.getFullYear() - startDate.getFullYear();
  let months = end.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  const yearStr = years > 0 ? `${years} yr${years > 1 ? 's' : ''}` : '';
  const monthStr = months > 0 ? `${months} mo${months > 1 ? 's' : ''}` : '';

  return [yearStr, monthStr].filter(Boolean).join(' ') || '< 1 mo';
}

export function getDateRangeLabel(startDate: Date, endDate?: Date): string {
  const startStr = formatDate(startDate);
  const endStr = endDate ? formatDate(endDate) : 'Present';
  return `${startStr} - ${endStr} · ${getDuration(startDate, endDate)}`;
}