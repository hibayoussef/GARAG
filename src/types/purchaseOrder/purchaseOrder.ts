export interface Tax {
    id: number;
    tax_name_en: string;
    amount: number;
  }

export interface PurchaseOrderRow {
    id?: number | null,
    store_id: number,
    product_id: number,
    project_id?: number,
    quantity: number | null,
    price_before_discount: number,
    discount_type: "percentage" | "fixed",
    discount_type_value: number,
    discount_amount: number,
    price_after_discount: number,
    price_before_tax: number,
    tax_id?: number,
    tax?: Tax;
    tax_amount: number,
    price_after_tax: number,
    price: number | null,
    notes: string,
    branch_id: number;
    account_id?: number;
}

export interface PurchaseOrderFormValues {
    organization_id: number;
    branch_id: number;
    transaction_date: string;
    transaction_time: string;
    due_date: string;
    contact_id: number;
    contact_name: string;
    main_currency_id: number | null;
    exchange_rate: number;
    sub_currency_id: number;
    auto_generated_ref_no: 0 | 1;
    ref_no: string;
    payment_term_id:number;
    notes: string;
    document_number?: number | null;
    is_draft: 0 | 1;
    items_count: number;
    total_discount: number;
    total_before_discount: number;
    total_after_discount: number;
    total_tax: number;
    total_before_tax: number;
    total_after_tax: number;
    account_id?: number;
    final_total: number;
    commission_type?: "Fixed" | "Percentage";
    commission_value?: number;
    rows: PurchaseOrderRow[]
    contact_sale_person_id?: number | null;
}

export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data?: T;
    errors?: Record<string, string[]>;
  }