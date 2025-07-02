import { Control, FieldErrors, UseFormWatch } from "react-hook-form";

export interface DeliveryNotesDetailsSectionProps {
  branchOptions: any[];
  timeOptions: any[];
  contactOptions: any[];
  paymentTermOptions: any[];
  currencyOptions: any[];
  isUpdate: boolean;
  watch: any;
  contactName?: string;
}

export interface DeliveryNotesRow {
   id?: number | null;
  product_id: number;
  store_id: number;
  project_id?: number;
  quantity: number;
  price_before_discount: number | null;
  discount_type: "percentage" | "fixed";
  discount_type_value: number;
  discount_amount: number;
  price_after_discount: number;
  price_before_tax: number;
  tax_id?: number;
  tax_amount: number;
  price_after_tax: number;
  price: number;
  notes: string;
  branch_id: number;
  account_id: number;
}

export interface DeliveryNotesFormValues {
  organization_id: number;
  branch_id: number;
  transaction_date: string;
  transaction_time: string;
  contact_id: number;
  contact_name: string;
  account_id: number;
  due_date: string;
  main_currency_id: number | null;
  exchange_rate: number;
  sub_currency_id: number;
  auto_generated_ref_no: 0 | 1;
  ref_no: string;
  payment_term_id: number;
  notes: string;
  items_count: number;
  total_discount: number;
  total_before_discount: number;
  total_after_discount: number;
  total_tax: number;
  total_before_tax: number;
  total_after_tax: number;
  final_total: number;
  is_draft: 0 | 1;
  contact_sale_person_id?: number | null;
  document_number?: string| number;
  commission_type?: "Fixed" | "Percentage";
  commission_value?: number;
  rows: DeliveryNotesRow[];
}

export interface SelectOption {
  value: number;
  label: string;
}

export interface DiscountTypeOption {
  value: "percentage" | "fixed";
  label: string;
}

export interface TimeOption {
  value: string;
  label: string;
}

export interface DeliveryNotesInfoSectionProps {
  control?: Control<DeliveryNotesFormValues>;
  errors?: FieldErrors<DeliveryNotesFormValues>;
  branchOptions: SelectOption[];
  timeOptions: TimeOption[];
  contactOptions: SelectOption[];
  paymentTermOptions: SelectOption[];
  isUpdate: boolean;
  watch: UseFormWatch<DeliveryNotesFormValues>;
}

export interface MoreInfoSectionProps {
  control?: Control<DeliveryNotesFormValues>;
  errors?: FieldErrors<DeliveryNotesFormValues>;
  currencyOptions: SelectOption[];
  mainCurrency: number;
  subCurrency: number;
}

export interface FinancialSummarySectionProps {
  control?: Control<DeliveryNotesFormValues>;
  errors?: FieldErrors<DeliveryNotesFormValues>;
  watch: UseFormWatch<DeliveryNotesFormValues>;
}

export interface FormActionsProps {
  watch: (name: string) => any;
  setValue: (name: keyof DeliveryNotesFormValues, value: any) => void;
  isUpdate: boolean;
}

export interface DeliveryNotesLinesSectionProps {
  ref: React.Ref<any>;
}

export type DeliveryNotesStatus =
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
