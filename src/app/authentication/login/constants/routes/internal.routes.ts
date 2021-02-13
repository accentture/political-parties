export const ROUTES_PATHS = {
    AUTH: {
        DEFAULT: 'auth',
        LOGIN: 'login',
    },
    PANEL: {
        DEFAULT: 'panel',
        USER: 'user',
    },
};

//this path I will use really
export const INTERNAL_PATHS = {
    // path  = camino
    /*
     * AUTHENTICATION
     */

    /* this code seems redundant with code above, but it feature allows a clearer code, it feature allows to mention code above but in a level flat */
    AUTH_DEFAULT: `${ROUTES_PATHS.AUTH.DEFAULT}`,
    AUTH_LOGIN: `${ROUTES_PATHS.AUTH.LOGIN}`,

    /*
     * PANEL
     */
    PANEL_DEFAULT: `${ROUTES_PATHS.PANEL.DEFAULT}`,
    PANEL_USER_LIST: `${ROUTES_PATHS.PANEL.USER}`,
};

export const INTERNAL_ROUTES = {
    // route = ruta
    /*
     * AUTHENTICATION
     */
    AUTH_LOGIN: `${INTERNAL_PATHS.AUTH_DEFAULT}/${INTERNAL_PATHS.PANEL_USER_LIST}`,

    /*
     * PANEL
     */
    PANEL_USER_LIST: `/${INTERNAL_PATHS.PANEL_DEFAULT}/${INTERNAL_PATHS.PANEL_USER_LIST}`,
};