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

export function isProduction() {
  return process.env.NODE_ENV === 'production';
}

export function removeTokenAndRedirectToLogin() {
  localStorage.removeItem('accessToken');

  if (isProduction()) {
    window.location.href = '/admin/auth';
  }
}
