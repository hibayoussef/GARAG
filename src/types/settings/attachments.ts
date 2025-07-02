export interface AwsDetails {
  aws_region?: string;
  aws_access_key?: string;
  aws_secret_key?: string;
  aws_bucket?: string;
  type?: "s3";
}

export interface OneDriveDetails {
  clientId?: string;
  object_id?: string;
  tenantId?: string;
  clientSecret?: string;
  redirectUri?: string;
  client_value?: string;
  userId?: string;
  type?: "onedrive";
}

export interface GoogleDriveDetails {
  type?: string;
  project_id?: string;
  private_key_id?: string;
  private_key?: string;
  client_email?: string;
  client_id?: string;
  client_x509_cert_url?: string;
  storage_type?: "googledrive";
}

export interface DropboxDetails {
  DROPBOX_ACCESS_TOKEN?: string;
  type?: "dropbox";
}

export type AttachmentDetails =
  | AwsDetails
  | OneDriveDetails
  | GoogleDriveDetails
  | DropboxDetails;

export interface IAttachmentsUpdate {
  id: number;
  organization_id: number;
  name?: string;
  type?: "s3" | "onedrive" | "googledrive" | "dropbox";
  details?: AttachmentDetails[];
}

export interface IAttachments extends IAttachmentsUpdate {
  organization_name_ar?: string | null;
  organization_name_en?: string | null;
  is_default?: boolean;
}