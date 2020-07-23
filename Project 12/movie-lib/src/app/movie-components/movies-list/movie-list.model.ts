import IMovie from '../movie/movie.model';


export default interface IMovies {
    page:number;
    results: IMovie[];
    total_results:number;
    total_pages:number;
}