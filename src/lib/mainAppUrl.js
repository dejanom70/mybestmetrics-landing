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

/**
 * Lien vers l’app avec intention post-auth (param `next`, allowlist côté app).
 * @param {string} pathWithQuery chemin relatif, ex. `/Checkout?plan=plan1_annual`
 */
export function withMainAppNext(pathWithQuery) {
  const base = getMainAppUrl();
  if (!base) return '#';
  const path = pathWithQuery.startsWith('/') ? pathWithQuery : `/${pathWithQuery}`;
  const next = encodeURIComponent(path);
  return `${base}/?next=${next}`;
}
