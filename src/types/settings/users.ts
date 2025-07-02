export interface IUser {
  id: number;
  active_organization_id: number;
  name: string;
  first_name: string | null;
  last_name: string | null;
  name_ar: string | null;
  first_name_ar: string | null;
  last_name_ar: string | null;
  email: string;
  is_active: number;
  telegram_chat_name: string | null;
  organizations: {
    id: number;
    organization_name_en: string;
  }[];
  roles: string[] | string;
  //roles: Record<string, string>;
  allowed_add_past_days?: number | null;
  allowed_add_future_days?: number | null;
  allowed_update_past_days?: number | null;
  allowed_update_future_days?: number | null;
  permissions: string[];
}

export interface UserForm {
  active_organization_id?: number;
  name: string;
  first_name?: string;
  last_name?: string;
  name_ar?: string;
  first_name_ar?: string;
  last_name_ar?: string;
  email: string;
  password?: string;
  is_active?: boolean;
  telegram_chat_name?: string;
  //roles: string[] | string;
  roles: Record<string, string>;
  allowed_add_past_days?: number | null;
  allowed_add_future_days?: number | null;
  allowed_update_past_days?: number | null;
  allowed_update_future_days?: number | null;
}

export interface UserUpdateForm {
  id?: number;
  data: UserForm;
}
