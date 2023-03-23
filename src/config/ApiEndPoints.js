// BaseURLs
export const BASE_URL = "http://localhost/api/"; //local URL for nginx redirectgit
// export const BASE_URL = "https://trading-da.varcity.io/api/"; // LIve URL

export const BASE_URL_USER = BASE_URL + "user2/";
export const BASE_URL_ORDERS = BASE_URL + "orders2/";
export const BASE_URL_ALERTS = BASE_URL + "alerts2/";
export const BASE_URL_MARKETDATA = BASE_URL + "marketdata2/";

export const API_END_POINTS = {
  // User Endpoints
  login: BASE_URL_USER + "login",
  registerNewUser: BASE_URL_USER + "register-new-user",
  forgotPasswordApi: BASE_URL_USER + "send-forgot-password-email",
  getUserProfile: BASE_URL_USER + "get-profile",
  changePassword: BASE_URL_USER + "changePassword",
  logout: BASE_URL + "logout",

};
