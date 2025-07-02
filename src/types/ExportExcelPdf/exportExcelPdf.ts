
export type ExportType =
  | "brands"
  | "categories"
  | "taxes"
  | "warranties"
  | "units";


export interface IColumnData {
  ar: string[]; 
  en: string[]; 
}


export interface IExportColumnsResponse {
  success: boolean;
  message: string;
  data: {
    columns: IColumnData ; 
  };
}//fetch


export interface IExportForm {
  type: ExportType; 
  columns?:number[]; 
}


export interface IExportResponse {
  success: boolean;
  message: string;
  data: {
    url: string; 
  };
}
