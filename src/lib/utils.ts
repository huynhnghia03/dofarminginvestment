export function formatDate(date: string | Date) {
  return new Date(date).toLocaleDateString('vi-VN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function formatPhoneNumber(phone: string) {
  // Format: 0889.269.777
  return phone.replace(/(\d{4})(\d{3})(\d{3})/, '$1.$2.$3');
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export function truncateText(text: string, length: number) {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + '...';
}

export function getImageUrl(path: string) {
  if (path.startsWith('http')) return path;
  return `/images/${path}`;
}

export const REVALIDATE_TIME = {
  HOUR: 60 * 60, // 1 hour
  DAY: 60 * 60 * 24, // 24 hours
  WEEK: 60 * 60 * 24 * 7, // 7 days
};

