export class PaginationRequestModel {
  previous: number;
  next: number;
  pageSize: number;
  where?: any;
  select?: any;
  orderBy?: any;
}
