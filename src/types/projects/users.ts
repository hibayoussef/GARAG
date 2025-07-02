export interface IProjectUser {
  id: number;
  name: string;
  email: string;
}

export interface ProjectUsersResponse {
  success: boolean;
  message: string;
  data: IProjectUser[];
}
