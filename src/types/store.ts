// import type { ILoginRequest } from "./auth";

// export interface AuthState {
//   token: string | null;
//   isAuthenticated: boolean;
//   firstName?: string;
//   lastName?: string;
//   profileImageURL?: string;
//   email?: string | undefined;
//   roleNames?: string[];
//   permissions?: any;
//   tempEmail: string;
//   tempPassword: string | null;
//   mfa: boolean;

//   login: (userData: any, token: string) => void;
//   logout: () => void;
//   setTempEmail: (email: string) => void;
//   setMfa: (mfa: boolean) => void;
//   setTempPassword: (password: string) => void;
//   skipMfa: (email: string, password: string) => Promise<boolean>;
//   initialize: () => void;
// }


export interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  user: any | null; 
  mfa: boolean;
  tempEmail: string;
  tempPassword: string | null;
  permissions: string[] | null; 

  login: (userData: any, token: string) => void;
  logout: () => void;
  setTempEmail: (email: string) => void;
  setMfa: (mfa: boolean) => void;
  setTempPassword: (password: string) => void;
  skipMfa: (email: string, password: string) => Promise<boolean>;
  initialize: () => void;
}
