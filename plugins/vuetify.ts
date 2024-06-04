import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify, ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { DefaultsInstance } from "vuetify/lib/framework.mjs";

const light: ThemeDefinition = {
    dark: false,
    colors: {
        background: "#FFFFFF",
        surface: "#FFFFFF",
        lighten: "#ebf0ff",
        primary: "#474e8a",
        secondary: "#9333ea",
        error: "#ef4444",
        info: "#3b82f6",
        success: "#10b981",
        warning: "#f59e0b",
    },
};

const dark: ThemeDefinition = {
    dark: true,
    colors: {
        background: "#020617",
        surface: "#0f172a",
        lighten: "#090f1b",
        primary: "#474e8a",
        secondary: "#9333ea",
        error: "#ef4444",
        info: "#3b82f6",
        success: "#10b981",
        warning: "#f59e0b",
    },
};

const defaults: DefaultsInstance = {
    VAppBar: {
        elevation: 0,
    },
    VBtn: {
        class: "text-none font-weight-bold"
    },
    VCard:{
        rounded: 'lg'
    },
    VCardTitle:{
        class: 'font-weight-bold relative py-3 px-5 align-center'
    },
    VListSubheader:{
        class: 'px-2'
    },
    VTextField: {
        color: "primary",
        variant: "solo-filled",
        elevation: 0,
        flat: true,
    },
    VFileInput: {
        color: "primary",
        variant: "solo-filled",
        elevation: 0,
        flat: true,
    },
    VNumberInput: {
        color: "primary",
        variant: "solo-filled",
        flat: true,
    },
    VOtpInput: {
        variant: "solo-filled",
        flat: true,
    },
    VTextarea: {
        color: "primary",
        variant: "solo-filled",
        flat: true,
        rows: 3
    },
    VSelect: {
        color: "primary",
        variant: "solo-filled",
        clearIcon: 'mdi-close',
        listProps: {
            density: 'compact',
            nav: true,
            border: true,
            rounded: 'lg',
            elevation: 16
        },
        flat: true,
    },
    VAutocomplete: {
        color: "primary",
        variant: "solo-filled",
        flat: true,
        menuProps: {
            elevation: 16,
            rounded: 'lg',
            border: true,
        },
        listProps: {
            density: 'compact',
            nav: true,
            rounded: 'lg',
            elevation: 0
        },
    },
    VSwitch: {
        color: "primary",
        density: 'compact',
    },
    VTooltip: {
        contentClass: "bg-surface elevation-10 rounded-lg border",
    },
}

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        components,
        directives,
        defaults,
        theme: {
            defaultTheme: "light",
            themes: {
                light,
                dark,
            },
        },
    })
    app.vueApp.use(vuetify)
})