/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_EMAILJS_USER_ID: string;
    REACT_APP_EMAILJS_SERVICE_ID: string;
    REACT_APP_EMAILJS_TEMPLATE_ID: string;
  }
}
