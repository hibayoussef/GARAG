export enum BillingMethod {
  FIXED_PRICE = "Fixed Price",
  TIME_AND_MATERIAL = "Time & Material",
  HOURLY = "Hourly",
  TEST = "TEST",
}

export enum ProjectStatus {
  NOT_STARTED = "Not Started",
  IN_PROGRESS = "In progress",
  ON_HOLD = "On hold",
  CANCELLED = "Cancelled",
  COMPLETED = "Completed",
}

export enum TaskStatus {
  NOT_STARTED = "Not Started",
  IN_PROGRESS = "In progress",
  ON_HOLD = "On hold",
  CANCELLED = "Cancelled",
  COMPLETED = "Completed",
}

export interface ProjectForm {
  organization_id: number;
  name_ar: string;
  name_en: string;
  code: string;
  billing_method: BillingMethod;
  description_ar?: string | null;
  description_en?: string | null;
  budget_cost: string;
  revenue_cost: string;
  hours_budget_type?: string | null;
  total_budget_hours: string;
  contact_id: number;
  contact_type: string;
  status: ProjectStatus;
  start_date: string;
  end_date: string;
  users: {
    user_id: number;
    name: string;
    name_ar: string;
    email: string;
    is_lead: number;
  }[];
  project_users: {
    user_id: number;
    is_lead: number;
  }[];
}

export interface ProjectUpdateForm {
  id: number;
  data: Partial<ProjectForm>;
}

export interface ProjectsResponse {
  success: boolean;
  message: string;
  data: IProject[];
}

export interface IProjectUser {
  user_id: number;
  is_lead: number;
}

export interface ITask {
  id: number;
  name_ar?: string;
  name_en: string;
  description_ar?: string;
  description_en?: string;
  start_date: string;
  due_date: string;
  status: TaskStatus;
  billable: number;
  isTempl?: boolean;
  lang_name?: string;
}

export interface IProject {
  id?: number;
  organization_id: number;
  contact_id: number;
  name_ar: string;
  name_en: string;
  code: string;
  billing_method: BillingMethod;
  description_ar?: string;
  description_en?: string;
  budget_cost: string;
  revenue_cost: string;
  hours_budget_type?: string | null;
  total_budget_hours: string;
  project_users: IProjectUser[];
  project_tasks: ITask[];
  users: {
    user_id: number;
    name: string;
    name_ar: string;
    email: string;
    is_lead: number;
  }[];
  contact_full_name_en: string;
  contact_full_name_ar: string;
  isTempl?: boolean;
  lang_name?: string;
  description?: string;
}
