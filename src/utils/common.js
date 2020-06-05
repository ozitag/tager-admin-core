import { BASE_PATH } from '@/constants/common';

export function isAbsoluteUrl(url) {
  return ['https:', 'http:'].some(protocol => url.startsWith(protocol));
}

export function getLogoUrl(logoPath) {
  if (!logoPath) return null;

  return isAbsoluteUrl(logoPath) ? logoPath : `${BASE_PATH}/${logoPath}`;
}

export function isDevelopment() {
  return process.env.NODE_ENV === 'development';
}

export function removeTokenAndRedirectToLogin() {
  localStorage.removeItem('accessToken');

  if (!isDevelopment()) {
    window.location.href = '/admin/auth';
  }
}
