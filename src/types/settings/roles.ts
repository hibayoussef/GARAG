export interface IRole {
  id: number;
  name: string;
  name_ar: string;
  display_name?: string;
  display_name_ar?: string;
  permissions?: number[];
}

export interface RoleForm {
  id?: number | null;
  name: string;
  name_ar: string;
  permissions: number[];
  organization_id: number;
}

export interface RoleUpdateForm {
  id?: number | null;
  data?: RoleForm;
}

export interface IPermission {
  id: number;
  name: string;
  display_name_ar: string;
  display_name_en: string;
}

export interface IPermissionGroup {
  [key: string]: IPermission[]; 
}