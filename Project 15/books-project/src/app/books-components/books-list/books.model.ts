import IBook from '../book/models/book.model';

export default interface IBooks {
  kind: string;
  totalItems: number;
  items: IBook[];
}
