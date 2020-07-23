export default interface IRecomendations {
  page: number;
  results: IRecomendation[];
  total_pages: number;
  total_results: number;
}

export interface IRecomendation {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: {}[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}
