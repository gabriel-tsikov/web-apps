export const APP_ROUTES = {
  authentication: {
    login: 'login',
  },

  books: {
    path: 'popular',
    children: {
      search: 'search-page',
      books: 'books-list',
      volumes: 'my-volumes',
    },
  },
};
export const UNATUHORIZED_REDIRECT_PATH = APP_ROUTES.books.children.search;
export const LOGIN_REDIRECT_PATH = APP_ROUTES.authentication.login;
