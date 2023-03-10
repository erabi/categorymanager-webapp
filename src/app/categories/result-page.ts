import { Category } from "./category";

export class ResultPage {
  constructor(
    public content: Category[],
    public pageable: unknown,
    public totalPages: number,
    public totalElements: number,
    public last: boolean,
    public size :number,
    public sort: unknown,
    public numberOfElements :number,
    public first: boolean,
    public empty: boolean,
  ) {}
}
