export const APP_ROUTES = {
    authentication: {

    },
    movies: {
        path: 'popular',
        children: {
            movie: 'movies-list/',
            credits: '/casts',
            reviews: '/reviews',
            recomendations: '/recomendations'
        }
    }
}