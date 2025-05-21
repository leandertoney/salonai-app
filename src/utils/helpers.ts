export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}

export function formatTime(timeString: string): string {
  const [hours, minutes] = timeString.split(':');
  const hour = parseInt(hours, 10);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const formattedHour = hour % 12 || 12;
  return `${formattedHour}:${minutes} ${ampm}`;
}

export function getStatusColor(status: string): string {
  switch (status) {
    case 'upcoming':
      return 'bg-primary-100 text-primary-700';
    case 'completed':
      return 'bg-success-100 text-success-700';
    case 'cancelled':
      return 'bg-error-100 text-error-700';
    case 'no-show':
      return 'bg-warning-100 text-warning-700';
    case 'sent':
      return 'bg-success-100 text-success-700';
    case 'scheduled':
      return 'bg-primary-100 text-primary-700';
    case 'draft':
      return 'bg-neutral-100 text-neutral-700';
    default:
      return 'bg-neutral-100 text-neutral-700';
  }
}