import * as process from 'process';
export const environment = {
    production: false,
    apiUrl: process.env.API_URL,
    tokenName :  "authToken",
    origin:'http://localhost:4200' 
  };
