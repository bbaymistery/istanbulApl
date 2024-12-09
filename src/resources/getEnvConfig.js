// env.js

const getEnvConfig = (config) => {
    const isDevelopment = true; // localohst -> true || live -> false
    return {
        websiteDomain: isDevelopment ? "http://localhost:3500" : "https://www.airport-pickups-london.com",
        apiDomain: config.API_SERVER_ORIGIN || "https://api.london-tech.com", // Use API domain from config
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
};

export async function fetchConfig() {
    const configFetch = await fetch('https://env.london-tech.com/configration.json');
    const config = await configFetch.json();
    return getEnvConfig(config);
}

