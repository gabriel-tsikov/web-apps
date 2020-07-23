import { environment } from '../../environments/environment';

export const API_REQUEST = {
    authentication: {
        get: `${environment.apiKey}`
    },
    movies: {
        get: `${environment.apiUrl}`
        
    }
}