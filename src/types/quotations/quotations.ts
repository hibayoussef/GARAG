export interface Tax {
    id: number;
    tax_name_en: string;
    amount: number;
}

export interface QuotationRow {
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

export interface QuotationFormValues {
    organization_id: number;
    branch_id: number;
    transaction_date: string;
    transaction_time: string;
    contact_id: number;
    contact_name: string;
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
    account_id?: number;
    final_total: number;
    is_draft: 0 | 1;
    document_number?: string | number;
    commission_type?: "Fixed" | "Percentage";
    commission_value?: number;
    rows: QuotationRow[],
    // related_to: ,
    due_date: string,
    contact_sale_person_id?: number | null,
}

export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data?: T;
    errors?: Record<string, string[]>;
 
  }