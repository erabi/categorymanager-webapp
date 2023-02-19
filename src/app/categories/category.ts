export class Category {
  constructor(
    public id :number,
    public name :string,
    public parent :string,
    public children :string[],
    public ancestors :string[]
  ) {}
}
