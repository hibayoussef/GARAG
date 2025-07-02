export interface IUser {
  id: number;
  name: string;
  name_ar?: string;
  email: string;
  // أي حقول أخرى
}

export interface IApproval {
  id: number;
  organization_id: number | null | undefined;
  module_id: number | null | undefined;
  need_approval_if_draft: number;
  is_active: number;
  users: Array<{
    user_id: number;
    name: string;
    level: number;
    email: string;
    is_active: number;
  }>;
  module_name_ar: string;
  module_name_en: string;
}

export interface ApprovalForm {
  organization_id: number | null | undefined;
  module_id: number | null | undefined;
  need_approval_if_draft: number;
  is_active: number;
  approval_setting_users: Array<{
    user_id: number;
    level: number;
    is_active: number;
  }>;
}
export interface ApprovalUpdateForm {
  id?: number | null;
  organization_id: number | null;
  module_id: number | null;
  need_approval_if_draft: number;
  is_active: number;
  approval_setting_users: Array<{
    user_id: number;
    level: number;
    is_active: number;
  }>;
}