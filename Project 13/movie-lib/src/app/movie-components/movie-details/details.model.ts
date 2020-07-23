export default interface IDetails {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: object;
    budget: number;
    genres: {
        id: number;
        name:string;
    }[];
    homepage: string;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview:string;
    popularity: number;
    poster_path: string;
    production_companies: object[];
    production_countries: object[];
    release_date: Date;
    revenue: number;
    runtime: number;
    spoken_languages: object[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}