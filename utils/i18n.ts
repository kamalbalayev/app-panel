export const i18n: any = {
    defaultLocale: 'en',
    baseUrl: process.env.ORIGIN,
    lazy: true,
    seo: true,
    detectBrowserLanguage: false,
    intervalPlural: true,
    customRoutes: 'config',
    langDir: './lang',
    compilation: {
        strictMessage: false,
    },
    locales: [
        {code: 'en', iso: 'en-US', name: 'English', file: 'en', dir: 'ltr'},
    ],
    pages: {

        'auth/sign-in/index': {
            en: '/sign-in',
        },

        'auth/sign-up/index': {
            en: '/sign-up',
        },

        'settings/account/index': {
            en: '/account',
        },

        'settings/users/index': {
            en: '/users',
        },

        'settings/roles/index': {
            en: '/roles',
        },

    }
}
