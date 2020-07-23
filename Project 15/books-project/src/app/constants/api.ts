import { environment } from 'src/environments/environment';

export const API_REQUEST = {
  books: {
    get: `${environment.apiUrl}`,
  },
  volumes: {
    get: `${environment.volumesUrl}`,
  },
  auth: {
    get: `${environment.authUrl}`,
  },
  apiKey: {
    get: `${environment.apiKey}`,
  },
};
