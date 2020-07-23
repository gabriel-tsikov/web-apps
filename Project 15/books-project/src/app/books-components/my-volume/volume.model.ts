export interface IVolume {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    pageCount: number;
    imageLinks: {
      thumbnail: string;
    };
  };
}
