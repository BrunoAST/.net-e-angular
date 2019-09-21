declare type OrderBy = 'created' | 'lastActive';

export interface IFilterParams {
  minAge: number;
  maxAge: number;
  gender: string;
  orderBy: OrderBy;
}
