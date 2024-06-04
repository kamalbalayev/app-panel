// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import {i18n} from './utils/i18n';
import {auth} from './utils/auth';

export default defineNuxtConfig({

    app: {
        head: {charset: 'utf-8', viewport: 'width=device-width, initial-scale=1'}
    },

    imports: {
        dirs: [
            'composables/**'
        ]
    },

    components: {
        global: true,
        dirs: [
            {path: '~/components/app', prefix: 'app'},
            {path: '~/components/global'},
            {path: '~/components/pages'}
        ]
    },

    typescript: {
        shim: false
    },

    experimental: {
        payloadExtraction: true,
        watcher: 'parcel',
    },

    future: {
        typescriptBundlerResolution: true,
    },

    vite: {
        logLevel: 'info',
        define: {
            'process.env.DEBUG': false,
        },
        server: {
            fs: {
                strict: false
            },
            hmr: false
        },
        css: {
            modules: {
                ignoreOrder: true,
            },
        },
        vue: {
            template: {
                transformAssetUrls,
            },
        },
    },

    modules: [

        '@nuxt/devtools',
        '@nuxtjs/i18n',
        '@nuxtjs/google-fonts',

        '@sidebase/nuxt-auth',
        '@pinia/nuxt',

        async (options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config) => {
                config.plugins.push(vuetify({ autoImport: true }))
            })
        },
    ],

    runtimeConfig: {
        public: {
            apiURL: process.env.API_URL,
            baseURL: process.env.ORIGIN,
            appName: process.env.APP_NAME,
        }
    },

    googleFonts: {
        display: 'swap',
        families: {
            Inter: [300, 400, 500, 700, 900]
        }
    },

    pinia: {
        autoImports: [
            'defineStore'
        ],
    },

    auth,

    i18n,

    build: {
        transpile: ["vuetify"],
    },

    devtools: { enabled: true }
})
