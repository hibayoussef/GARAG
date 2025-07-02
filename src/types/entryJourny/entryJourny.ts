export interface IEntryJourney {
  id: number;
  organization_id: number;
  contact_id: number;
  name_ar: string;
  name_en: string;
  code: string;
  billing_method: string;
  description_ar?: string | null;
  description_en?: string | null;
  budget_cost: number;
  revenue_cost: number;
  hours_budget_type: string;
  total_budget_hours: number;
  project_users: {
    user_id: number;
    is_lead: boolean;
  }[];
}

export interface EntryJourneyForm {
  id?: number | null;
  organization_id: number;
  contact_id: number;
  name_ar: string;
  name_en: string;
  code: string;
  billing_method: string;
  description_ar?: string | null;
  description_en?: string | null;
  budget_cost: number;
  revenue_cost: number;
  hours_budget_type: string;
  total_budget_hours: number;
  project_users: {
    user_id: number;
    is_lead: boolean;
  }[];
}

export interface JournalEntryRequest {
  organization_id: number;
  branch_id: number;
  date: string;
  notes?: string;
  ref_no?: string;
  auto_generated_ref_no: 0 | 1;
  document_number?: number;
  main_currency_id: number;
  exchange_rate: number;
  sub_currency_id: number;
  is_draft: 0 | 1;
  rows: {
    account_id: number;
    date: string;
    project_id: number;
    amount: number;
    tax_id: number;
    amount_after_tax: number;
    notes: string;
    contact_id: number;
    billable: 0 | 1;
    branch_id: number;
  }[];
  method?: "PUT";
}

export interface JournalEntry {
  id: number;
  jv_number: string;
  date: string;
  branch_name_en: string;
  branch_name_ar: string;
  ref_no: string;
  notes: string;
  main_currency_name_en: string;
  sub_currency_name_en: string | null;
  exchange_rate: string;
  is_draft: number;
  is_cancelled: number;
  final_approved: number;
  details: Array<{
    debit: string;
    credit: string;
    sc_debit: string;
    sc_credit: string;
  }>;
}

export interface ProjectUser {
  user_id: number;
  is_lead: boolean;
}

export interface ProjectUser {
  user_id: number;
  is_lead: boolean;
}

export type BillingMethod = "hourly" | "fixed" | "milestone";

export type HoursBudgetType = "fixed" | "flexible" | "unlimited";

export interface UserOption {
  value: number;
  label: string;
  isLead?: boolean;
}

export type RowType = {
  account_id: number;
  branch_id: number;
  notes?: string;
  contact_id?: number;
  project_id?: number;
};

export type JournalEntryFormValues = {
  branch_id: number;
  date: string;
  notes?: string;
  auto_generated_ref_no: 0 | 1;
  ref_no?: string;
  document_number?: number;
  main_currency_id: number;
  sub_currency_id: number;
  exchange_rate: number;
  is_draft: 0 | 1;
  rows: RowType[];
};
