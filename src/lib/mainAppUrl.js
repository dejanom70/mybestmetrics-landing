/**
 * URL de l’application principale.
 * Définir VITE_MAIN_APP_URL dans .env (ex. http://localhost:5173 ou https://app.mybestmetrics.com).
 */
export function getMainAppUrl() {
  const url = import.meta.env.VITE_MAIN_APP_URL;
  if (!url) {
    console.warn('VITE_MAIN_APP_URL is not set');
    return '';
  }
  return url.replace(/\/$/, '');
}

/** Page de connexion de l’app : `${VITE_MAIN_APP_URL}/login` */
export function getMainAppLoginUrl() {
  const base = getMainAppUrl();
  if (!base) return '';
  return `${base}/login`;
}

export function withMainAppQuery(query) {
  const base = getMainAppUrl();
  if (!base) return '#';
  if (!query || !Object.keys(query).length) return base;
  const params = new URLSearchParams(query);
  return `${base}?${params.toString()}`;
}
