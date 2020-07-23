import IReview from '../movie-review/review.model';

export default interface IReviews {
    id: number;
    page:number;
    results: IReview[];
    total_pages: number;
    total_results:number;
}
