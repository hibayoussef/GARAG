export const DEFAULT_PREFIXES = [
  { prefix_name: "Sales", prefix_code: "SA", next_number: 1 },
  { prefix_name: "Purchases", prefix_code: "PU", next_number: 1 },
  { prefix_name: "Sales Return", prefix_code: "SR", next_number: 1 },
  { prefix_name: "Purchases Return", prefix_code: "PR", next_number: 1 },
  { prefix_name: "JobCards", prefix_code: "JC", next_number: 1 },
  { prefix_name: "Journal Entry", prefix_code: "JE", next_number: 1 },
  { prefix_name: "Expenses", prefix_code: "E", next_number: 1 },
  { prefix_name: "Order Request", prefix_code: "OR", next_number: 1 },
  { prefix_name: "Quotations", prefix_code: "Q", next_number: 1 },
  { prefix_name: "Sales Order", prefix_code: "SO", next_number: 1 },
  { prefix_name: "Delivery Note", prefix_code: "DN", next_number: 1 },
  { prefix_name: "Purchase Requisition", prefix_code: "PUR", next_number: 1 },
  { prefix_name: "Purchase Order", prefix_code: "PO", next_number: 1 },
  { prefix_name: "Reciving Item", prefix_code: "RI", next_number: 1 },
  { prefix_name: "Received Payments", prefix_code: "RP", next_number: 1 },
  { prefix_name: "Paid Payments", prefix_code: "PP", next_number: 1 }
];
export interface IStore {
  id: number;
  branch_id?: number;
  store_name_ar?: string | null;
  store_name_en: string;
  email?: string | null;
  mobile?: string | null;
  country_state_id?: number | null;
  website?: string | null;
  logo_file_name?: string | null;
  logo_file_path?: string | null;
  logo_mime_type?: string | null;
}
export interface Iprefixe{
  id?:number,
  prefix_name?:string;
  prefix_code?:string;
  next_number?:number
}
export interface IBranch {
  id: number;
  branch_name_ar?: string | null;
  branch_name_en: string;
  email?: string | null;
  mobile?: string | null;
  website?: string | null;
  country_state_id?: number | null;

  logo_file_name?: string | null;
  logo_file_path?: string | null;
  logo_mime_type?: string | null;
  stores: IStore[];
   prefixes: Iprefixe[]
}
export interface BranchForm {
id: number;
  branch_name_ar?: string | null;
  branch_name_en: string;
  email?: string | null;
  mobile?: string | null;
  website?: string | null;
  country_state_id?: number | null;

  logo_file_name?: string | null;
  logo_file_path?: string | null;
  logo_mime_type?: string | null;
  
   prefixes: Iprefixe[]
}

export interface BranchUpdateForm {
  id?: number | null;
  data?: BranchForm ;
}

export interface BrandResponse {
  success: boolean;
  message: string;
  data: IBranch[];
}
