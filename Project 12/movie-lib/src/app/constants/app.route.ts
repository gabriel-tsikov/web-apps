export const APP_ROUTES = {
    authentication: {
        login: 'login',
        register: 'register'
    },

    movies: {
        path: 'popular',
        children: {
            movie: 'movies-list',
            credits: '/casts',
            reviews: '/reviews',
            recomendations: '/recomendations',
            favorites: '/favorites'
        }
    }
}
export const UNATUHORIZED_REDIRECT_PATH = APP_ROUTES.movies.children.movie;
export const LOGIN_REDIRECT_PATH = APP_ROUTES.authentication.login;
