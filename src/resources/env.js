const isDevelopment = true; // localohst -> true || live -> false
const env = {
  websiteDomain: isDevelopment
    ? "http://localhost:3500"
    : "",
  apiDomain: "https://api.london-tech.com",
  status: {
    success: 200,
    error: 403,
    success: 200,
    badRequest: 400,
    unauthorized: 401,
    forbidden: 403,
    methodNotAllowed: 405,
    notAcceptable: 406,
    internalServerError: 500,
  },
};
export default env;
