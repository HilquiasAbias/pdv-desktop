export class PaginationResponseModel {
  pageSize!: number;
  previous!: number;
  next!: number;
  total!: number;
  data!: any[];
}
