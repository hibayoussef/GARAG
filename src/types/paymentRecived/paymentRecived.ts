import { Control, FieldErrors, UseFormWatch } from "react-hook-form";

export interface PaymentReceivedDetailsSectionProps {
  customers: any[];
  vendors: any[];
  employees: any[];
  accounts?: any[];
  tableName?: string;
  branchOptions: any[];
  timeOptions: any[];
  paymentTermOptions: any[];
  currencyOptions: any[];
  isUpdate: boolean;
  watch: any;
  contactName?: string;
  isCommissions?: boolean;
  salesPersonOptions?: any[] | any;
  invoiceNo?: boolean;
  isPurchase?: boolean;
}

export interface TransactionPaymentLine {
  id?: number | null;
  transaction_id?: number | null;
  line_id?: number | null;
  transaction_payment_line_type: any;
  account_id: number;
  amount: number;
  bank_name?: string;
  cheque_number?: string;
  cheque_date?: string;
  card_number?: string;
  card_holder_name?: string;
  card_type?: string;
  card_expiry_date?: string;
  bank_account_number?: string;
  bank_account_name?: string;
  bank_account_type?: string;
  bank_account_currency_id?: number;
  bank_account_branch_id?: number;
  bank_account_swift_code?: string;
  bank_account_iban?: string;
  notes?: string;
}

export interface TransactionLine {
  id: number;
  line_id?: number | null;
  amount: number;
}

export interface Transaction {
  id: number;
  transaction_id?: number | null;
  amount: number;
  lines: TransactionLine[];
}

export interface PaymentReceivedRow {
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
  unit_id: number;
  tax_amount: number;
  price_after_tax: number;
  notes: string;
  branch_id: number;
  account_id?: number;
  id?: number | null;
  default_sale_unit_id?: number;
  default_purchase_unit_id?: number;
  transaction_payment_line?: TransactionPaymentLine;
}

export interface PaymentReceivedFormValues {
  id?: number | null;
  organization_id: number;
  branch_id: number;
  account_id?: number;
  contact_id: number;
  contact_name: string;
  transaction_payment_date: string;
  transaction_payment_time: string;
  auto_generated_ref_no: 0 | 1;
  ref_no: string;
  document_number?: string | number;
  main_currency_id: number | null;
  exchange_rate: number;
  sub_currency_id: number;
  notes: string;
  items_count: number;
  final_total: number;
  is_draft: 0 | 1;
  terms_and_conditions_ar?: string;
  terms_and_conditions_en?: string;
  transaction_date?: string;
  due_date?: string;
  transaction_time?: string;
  transaction_id?: number | null;
  contact_purchase_person_id?: string;
  payment_term_id?: number;
  contact_sale_person_id?: number | null;
  total_discount?: number;
  total_before_discount?: number;
  total_after_discount?: number;
  total_tax?: number;
  total_before_tax?: number;
  total_discount_type?: string;
  total_discount_fixed?: number | null;
  total_discount_value?: number | null;
  total_after_tax?: number;
  commission_type?: "Fixed" | "Percentage";
  commission_value?: number;

  rows: PaymentReceivedRow[];
  lines: PaymentReceivedRow[];
  transactions?: Transaction[];
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

export interface PaymentReceivedInfoSectionProps {
  control?: Control<PaymentReceivedFormValues>;
  errors?: FieldErrors<PaymentReceivedFormValues>;
  branchOptions: SelectOption[];
  timeOptions: TimeOption[];
  contactOptions: SelectOption[];
  paymentTermOptions: SelectOption[];
  isUpdate: boolean;
  watch: UseFormWatch<PaymentReceivedFormValues>;
}

export interface MoreInfoSectionProps {
  control?: Control<PaymentReceivedFormValues>;
  errors?: FieldErrors<PaymentReceivedFormValues>;
  currencyOptions: SelectOption[];
  mainCurrency: number;
  subCurrency: number;
}

export interface FinancialSummarySectionProps {
  control?: Control<PaymentReceivedFormValues>;
  errors?: FieldErrors<PaymentReceivedFormValues>;
  watch: UseFormWatch<PaymentReceivedFormValues>;
}

export interface FormActionsProps {
  watch: (name: string) => any;
  setValue: (name: keyof PaymentReceivedFormValues, value: any) => void;
  isUpdate: boolean;
}

export interface PaymentReceivedLinesSectionProps {
  ref: React.Ref<any>;
}

export type PaymentReceivedStatus =
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
