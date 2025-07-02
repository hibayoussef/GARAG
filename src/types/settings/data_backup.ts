export interface IDataBackup {
  id: number;
  organization_id: number | null | undefined;
  user_id: number;
  date: string;
  file: string;
}

export interface IDataBackupForm {
  organization_id: number | null | undefined;
}
export interface IDataBackupStore {
    organization_id: number | null | undefined;
    backup_id:number
  }