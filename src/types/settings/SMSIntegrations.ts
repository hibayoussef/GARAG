export interface ISMS {
    id: number ;
title: string;
twilio_sid: string;
twilio_token: string;
twilio_number: string;
is_default:number
  }
  export interface ISMSU {
    id: number ;
data:{
  id:number
  title: string;
twilio_sid: string;
twilio_token: string;
twilio_number: string;
is_default:number}
  }
  export interface SMSForm {
    organization_id: number | null;
    title: string;
twilio_sid: string;
twilio_token: string;
twilio_number: string;

  }
  
  export interface SMSMessage {
    message: string;
phone: number;
  }
  export interface SMSUpdateForm {
    id?: number | null;
    organization_id: number | null;
    title: string;
twilio_sid: string;
twilio_token: string;
twilio_number: string;
  }
  