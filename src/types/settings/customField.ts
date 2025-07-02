export interface ICustomField{
         id: number;
  label: string;
  name: string;
  type: string;
  module: string;
  is_required: boolean | number;
  options?: string;
       
        // updated_at:string ,
        // created_at: string,
      

}

export interface ICustomFieldForm{
   id?: number | undefined;
  label: string;
  name: string;
  type: string;
  module: string;
  is_required: boolean | number;
  options?: string;
}
