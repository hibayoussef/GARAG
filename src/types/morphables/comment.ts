// src/types/morphables/comment.ts
import type { CommentableType } from "../enums/commentType";

export interface IComment {
  id?: number;
  organization_id: number | null;
  comment: string;
  commentable_type: CommentableType;
  commentable_id: number;
  user_id?: number;
  user_name?: string;
  created_at?: string;
  updated_at?: string;
  comment_by?: string;
  date?: string;
}

export interface CommentCreatePayload {
  organization_id: number | null;
  comment: string;
  commentable_type: CommentableType;
  commentable_id: number;
}
