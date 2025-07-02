import { Control, FieldErrors, UseFormWatch } from "react-hook-form";

export interface OrderRequestDetailsSectionProps {
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

export interface OrderRequestRow {
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
  default_sale_unit_id?: number;
  default_purchase_unit_id?: number;
}

export interface OrderRequestFormValues {
  organization_id: number;
  branch_id: number;
  transaction_date: string;
  due_date?: string;
  transaction_time: string;
  contact_id: number;
  contact_name: string;
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
  document_number?: string;
  commission_type?: "Fixed" | "Percentage";
  commission_value?: number;
  rows: OrderRequestRow[];
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

export interface OrderRequestInfoSectionProps {
  control?: Control<OrderRequestFormValues>;
  errors?: FieldErrors<OrderRequestFormValues>;
  branchOptions: SelectOption[];
  timeOptions: TimeOption[];
  contactOptions: SelectOption[];
  paymentTermOptions: SelectOption[];
  isUpdate: boolean;
  watch: UseFormWatch<OrderRequestFormValues>;
}

export interface MoreInfoSectionProps {
  control?: Control<OrderRequestFormValues>;
  errors?: FieldErrors<OrderRequestFormValues>;
  currencyOptions: SelectOption[];
  mainCurrency: number;
  subCurrency: number;
}

export interface FinancialSummarySectionProps {
  control?: Control<OrderRequestFormValues>;
  errors?: FieldErrors<OrderRequestFormValues>;
  watch: UseFormWatch<OrderRequestFormValues>;
}

export interface FormActionsProps {
  watch: (name: string) => any;
  setValue: (name: keyof OrderRequestFormValues, value: any) => void;
  isUpdate: boolean;
}

export interface OrderRequestLinesSectionProps {
  ref: React.Ref<any>;
}

export type OrderRequestStatus =
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
