// import { Category } from './category'

export class Post {
  id: string;
  postText: string;
  // answers: Answer[];
  ordered: boolean;
  explanation?: string;
  tags: string[];
  // categories?: Category[];
  // categoryIds: number[];
  published?: boolean;
  status?: PostStatus;
  created_uid?: string;
  createdOn?: Date;
  lastUpdated_uid?: string;
  lastUpdatedOn?: Date;
  approved_uid?: string;
  approvedOn?: Date;

  constructor() {
    this.id = "";
    this.ordered = false;
    this.tags = [];
    // this.categories = [];
    // this.categoryIds = [];
    this.published = false;
    this.status = PostStatus.SAVED;
  }
}

export class Answer {
  id: number;
  answerText: string;
  correct: boolean;
}

export enum PostStatus {
  SAVED,
  SUBMITTED,
  APPROVED,
  INACTIVE
}
