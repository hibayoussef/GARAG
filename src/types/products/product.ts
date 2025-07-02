export interface IProduct {
  id: number;
  organization_id: number;
  for_selling: number;
  type: "Goods" | "Service" | "Landing Cost";
  product_name_ar: string;
  product_name_en: string;
  sku: string;
  color?: string;
  tax_id?: number | null;
  brand_id?: number | null;
  category_id?: number | null;
  sub_category_id?: number | null;
  unit_id: number | null;
  sub_units: Array<{ id: number | null }>;
  warranty_id?: number | null;
  alert_quantity?: number | null;
  alert_quantity_count: number | null;
  expiry_date?: string;
  contact_type?: string;
  is_active: number;
  subUnits: Array<{
    id: number;
    main_unit_id: number;
    mult_type: string;
    multiplier: number | null;
    sub_unit_id: number;
  }>;
  branches: Array<{
    branch_id: number;
    is_active: boolean;
    sale_price?: number;
    purchase_price?: number;
    sale_account?: number;
    purchase_account?: number;
    sale_return_account?: number;
    purchase_return_account?: number;
  }>;
  default_sale_unit_id: number | null;
  default_purchase_unit_id: number | null;
  lang_name?: string;
  preferred_vendor_id?: number[];
  product_sub_units: Array<{
    mult_type: any;
    main_unit_id: number | null;
    multiplier: number | null;
    sub_unit_id: number | null;
  }>;
  stores: ProductStoresRow[];
}

export interface ProductSubUnitsRow{
  main_unit_id: number,
  sub_unit_id: number | undefined,
  multiplier: number | null,
  mult_type: "normal" | "reverse" | undefined,
}

export interface ProductStoresRow {
  branch_id: number | null;
  store_id: number | null;
  rack: number | null;
  row: number | null;
  position: string | null;
  quantity_in: number | null;
  quantity_out: number | null;
  available_quantity: number | null;
}

export interface ProductType {
  for_selling: number;
  type: "Goods" | "Service" | "Landing Cost";
  product_name_ar: string;
  product_name_en: string;
  sku: string;
  color: string;
  tax_id: number | null;
  brand_id: number | null;
  category_id: number | null;
  sub_category_id: number | null;
  unit_id: number;
  sub_unit_id: number | null;
  sub_units: { id: number }[];
  warranty_id: number | null;
  alert_quantity: number;
  alert_quantity_count: number | null;
  description: string;
  branches: {
    branch_id: number;
    is_active: boolean;
    sale_price: number | null;
    purchase_price: number | null;
    sale_account: number;
    purchase_account: number;
    sale_return_account: number;
    purchase_return_account: number;
    rack: string | null;
    row: string | null;
    position: string | null;
  }[];
  expiry_date?: string;
  is_active: number;
  default_sale_unit_id: number;
  default_purchase_unit_id: number;
  lang_name?: string;
  preferred_vendor_id: number[];
  product_sub_units: ProductSubUnitsRow[];
  stores: ProductStoresRow[];
}

export interface ProductForm {
  organization_id: number;
  for_selling: number;
  type: "Goods" | "Service" | "Landing Cost";
  product_name_ar: string;
  product_name_en: string;
  sku: string;
  color?: string;
  tax_id?: number;
  brand_id?: number;
  category_id?: number;
  sub_category_id?: number;
  unit_id: number;
  sub_units: Array<{ id: number }>;
  warranty_id?: number;
  alert_quantity?: number;
  alert_quantity_count: number | null;
  expiry_date?: string;
  is_active: boolean;
  branches: Array<{
    branch_id: number;
    is_active: boolean;
    sale_price?: number;
    purchase_price?: number;
    sale_account?: number;
    purchase_account?: number;
    sale_return_account?: number;
    purchase_return_account?: number;
  }>;
  default_sale_unit_id: number;
  default_purchase_unit_id: number;
  lang_name?: string;
  preferred_vendor_id?: number[];
  product_sub_units?: ProductSubUnitsRow[];
  stores: ProductStoresRow[];
}
