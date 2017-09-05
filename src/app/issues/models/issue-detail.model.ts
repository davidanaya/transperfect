export interface IssueDetail {
  number: number;
  title: string;
  state: string;
  createdAt: string;
  comments: number;
  user: string;
  asignees: any[];
  labels: any[];
  body: string;
}