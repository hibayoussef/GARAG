export interface IOrder {
  id: number;
  organization_id: number | null;
  user_id: number;
  title: string;
  type: string;
  data: ColumnItem[];
}

export interface ColumnItem {
  id: number;
  checked: boolean;
  column_name: string;
}

export interface OrderForm {
  organization_id?: number | null;
  user_id?: number;
  title: string;
  type: string;
  data: ColumnItem[] | string;
}

export interface OrderUpdateForm {
  organization_id?: number | null;
  user_id?: number;
  title?: string;
  type?: string;
  data?: ColumnItem[] | string;
}
