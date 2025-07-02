import { Control, FieldErrors, UseFormWatch } from "react-hook-form";

export interface salesOrdertDetailsSectionProps {
   tableName?: string;
  branchOptions: any[];
  timeOptions: any[];
  contactOptions: any[];
  paymentTermOptions: any[];
  currencyOptions: any[];
  isUpdate: boolean;
  watch: any;
  contactName?: string;
  salesPersonOptions?: any[];
}
export interface Tax {
  id: number;
  tax_name_en: string;
  amount: number;
}
// export interface salesOrderRow {
//   product_id: number;
//   store_id: number;
//   project_id?: number;
//   quantity: number;
//   price: number | null;
//   price_before_discount: number | null;
//   discount_type: "percentage" | "fixed";
//   discount_type_value: number;
//   discount_amount: number;
//   price_after_discount: number;
//   price_before_tax: number;
//   tax_id?: number;
//   tax_amount: number;
//   price_after_tax: number;
  
//   notes: string;
//   branch_id: number;
// }
export interface salesOrderRow {
   id?: number | null;
  product_id: number;
  store_id: number;
  project_id?: number;
  quantity: number | null;
  price: number | null;
  price_before_discount: number;
  discount_type: "percentage" | "fixed";
  discount_type_value: number;
  discount_amount: number;
  price_after_discount: number;
  price_before_tax: number;
  tax_id?: number;
  tax?: Tax;
  tax_amount: number;
  price_after_tax: number;
  notes: string;
  branch_id: number;
  account_id?: number;
}
// export interface salesOrderFormValues {
//   organization_id: number;
//   branch_id: number;
//   transaction_date: string;
//   due_date:string  ,
//   transaction_time: string;
//   contact_id: number;
//   contact_name: string;
//   main_currency_id: number | null;
//   exchange_rate: number;
//   sub_currency_id: number;
//   auto_generated_ref_no: 0 | 1;
//   ref_no: string;
//   payment_term_id: number;
//   notes: string;
//   items_count: number;
//   total_discount: number;
//   total_before_discount: number;
//   total_after_discount: number;
//   total_tax: number;
//   total_before_tax: number;
//   total_after_tax: number;
//   final_total: number;
//   is_draft: 0 | 1;
//   document_number?: string;
//   commission_type?: "Fixed" | "Percentage";
//   commission_value?: number;
//   rows: salesOrderRow[];
// }
export interface salesOrderFormValues {
  organization_id: number;
  branch_id: number;
  unit_id?: number;
  transaction_date: string;
  due_date: string;
  transaction_time: string;
  contact_id: number;
  contact_name: string;
  bill_no?: string;
  contact_purchase_person_id?: string;
  terms_and_conditions_ar?: string;
  terms_and_conditions_en?: string;
  main_currency_id: number | null;
  exchange_rate: number;
  sub_currency_id: number;
  auto_generated_ref_no: 0 | 1;
  ref_no: string;
  payment_term_id: number;
  contact_sale_person_id?: number | null;
  notes: string;
  items_count: number;
  total_discount: number;
  total_before_discount: number;
  total_after_discount: number;
  total_tax: number;
  total_before_tax: number;
  total_after_tax: number;
  account_id?: number;
  final_total: number;
  is_draft: 0 | 1;
  document_number?: string |number;
  commission_type?: "Fixed" | "Percentage";
  commission_value?: number;
  rows: salesOrderRow[];
}
export interface SelectOption {
  value: number;
  label: string;
  amount?: number;
  tax_id?: number;
}
export interface DiscountTypeOption {
  value: "percentage" | "fixed";
  label: string;
  shortLabel?: string;
}

export interface TimeOption {
  value: string;
  label: string;
}

export interface salesOrderInfoSectionProps {
  control?: Control<salesOrderFormValues>;
  errors?: FieldErrors<salesOrderFormValues>;
  branchOptions: SelectOption[];
  timeOptions: TimeOption[];
  contactOptions: SelectOption[];
  paymentTermOptions: SelectOption[];
  isUpdate: boolean;
  watch: UseFormWatch<salesOrderFormValues>;
}

export interface MoreInfoSectionProps {
  control?: Control<salesOrderFormValues>;
  errors?: FieldErrors<salesOrderFormValues>;
  currencyOptions: SelectOption[];
  mainCurrency: number;
  subCurrency: number;
}

export interface FinancialSummarySectionProps {
  control?: Control<salesOrderFormValues>;
  errors?: FieldErrors<salesOrderFormValues>;
  watch: UseFormWatch<salesOrderFormValues>;
}

export interface FormActionsProps {
  watch: (name: string) => any;
  setValue: (name: keyof salesOrderFormValues, value: any) => void;
  isUpdate: boolean;
}

export interface salesOrderLinesSectionProps {
  ref: React.Ref<any>;
}

export type salesOrderStatus =
  | "draft"
  | "pending"
  | "approved"
  | "rejected"
  | "cancelled";

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string[]>;
}
