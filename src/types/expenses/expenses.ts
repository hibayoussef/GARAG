export interface ExpenseLine {
  id?: number;
  date: string;
  account_id: number;
  account_name_ar?: string;
  account_name_en?: string;
  project_id: number;
  project_name_ar?: string;
  project_name_en?: string;
  amount: string;
  tax_id: number;
  tax_name_ar?: string;
  tax_name_en?: string;
  amount_after_tax: string;
  notes?: string;
  contact_id: number;
  contact_name_ar?: string;
  contact_name_en?: string;
  billable: 0 | 1;
}

export interface Expense {
  id?: number;
  branch_id: number;
  branch_name_ar?: string | null;
  branch_name_en?: string | null;
  transaction_type: string;
  jv_number?: string | null;
  contact_id: number;
  contact_name: string;
  transaction_date: string;
  transaction_time: string;
  payment_term_id: number;
  payment_term_name_ar?: string | null;
  payment_term_name_en?: string | null;
  payment_term_number_of_days?: number | null;
  ref_no?: string | null;
  notes?: string;
  items_count: number;
  total_discount: string;
  total_before_discount: string;
  total_after_discount?: string | null;
  total_tax: string;
  total_before_tax: string;
  total_after_tax: string;
  final_total: string;
  is_draft: 0 | 1;
  is_cancelled: 0 | 1;
  final_approved: 0 | 1;
  expense_lines: ExpenseLine[];
}

export interface ExpenseRow {
  id?: number;
  date: string;
  account_id: number;
  project_id: number;
  amount: number | null;
  tax_id: number;
  amount_after_tax: number | null;
  notes?: string;
  contact_id: number;
  billable: 0 | 1;
  branch_id: number;
}

export interface ExpenseFormValues {
  organization_id: number;
  branch_id: number;
  transaction_date: string;
  transaction_time: string;
  contact_id: number;
  document_number: number;
  // account_id: number;
  main_currency_id: number;
  exchange_rate: number;
  contact_name: string;
  sub_currency_id: number;
  auto_generated_ref_no: number;
  ref_no: string;
  payment_term_id: number;
  notes?: string;
  items_count: number;
  total_discount: number | null;
  total_before_discount: number;
  total_after_discount: number;
  total_tax: number;
  total_before_tax: number;
  total_after_tax: number;
  final_total: number;
  is_draft: number;
  rows: ExpenseRow[];
}

export interface ExpenseResponse {
  success: boolean;
  message: string;
  data: Expense[];
}
