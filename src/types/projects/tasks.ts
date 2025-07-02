export type TaskStatus =
  | "Not Started"
  | "In progress"
  | "On hold"
  | "Cancelled"
  | "Completed";


export interface ITask {
  id?: number;
  project_id: number;
  name_ar: string;
  name_en: string;
  description_ar?: string | null;
  description_en?: string | null;
  start_date: string;
  due_date: string;
  status: TaskStatus;
  billable: number;
  assigned_to?: number | null;
  isTemp?: boolean; 
  _method?: string;
}

export interface TaskForm {
  project_id: number;
  name_en: string;
  start_date: string;
  due_date: string;
  name_ar?: string | null;
  description_ar?: string | null;
  description_en?: string | null;
  status?: TaskStatus;
  billable?: number|boolean;
  assigned_to?: number | null;
  isTemp?: boolean;
}

export interface TaskUpdateForm {
  id: number | any;
  data: Partial<TaskForm>;
}

export interface TasksResponse {
  success: boolean;
  message: string;
  data: ITask[];
}
