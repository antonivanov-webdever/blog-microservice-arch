export interface Comment {
  _id?: string;
  userId: string;
  postId: string;
  text: string;
  createdAt?: number;
  updatedAt?: number;
}
