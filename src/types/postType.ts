export interface IPostItem {
  userId: number;
  id: string;
  title: string;
  body: string;
  status: "published" | "draft" | "block" | "all";
  topRate: boolean;
}

export interface IPostResponse {
  first: number;
  prev: number;
  next: number;
  last: number;
  pages: number;
  items: number;
  data: IPostItem[];
}
