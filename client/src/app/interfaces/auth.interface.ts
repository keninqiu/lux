export interface Login {
    emailOrPhone: string;
    password: string;
  }
  
  export interface Tokens {
    token: string;
  }
  
  export interface SignUp {
    firstName: string;
    middleName?: string
    lastName: string;
    email: string;
    phone?: string;
    password: string;
    confirmPassword: string;
  }
  