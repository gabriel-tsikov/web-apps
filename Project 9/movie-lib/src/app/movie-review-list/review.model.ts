export default interface IReview {
    id: number;
    page:number;
    results: {
        id: string;
        author: string;
        content: string;
        url: string;
    }[]
    total_pages: number;
    total_results:number;
}