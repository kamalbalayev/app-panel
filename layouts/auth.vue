<script setup lang="ts">

const theme = useTheme()
const {mdAndUp} = useDisplay()
const runtimeConfig = useRuntimeConfig()
const {$themeColorMode}: any = useNuxtApp()

const i18nHead = useLocaleHead({
    addSeoAttributes: {}
})

useHead({
    htmlAttrs: {
        lang: i18nHead.value.htmlAttrs.lang
    },
    title: runtimeConfig.public.appName,
    link: [...(i18nHead.value.link || [])],
    meta: [...(i18nHead.value.meta || [])]
})

onMounted(() => {
    theme.global.name.value = $themeColorMode.value === 'system'
        ? window?.matchMedia
            ? window?.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light'
            : 'light'
        : $themeColorMode.value;
})

</script>

<template>
    <v-app>
        <v-main>

            <v-row no-gutters align="center" class="fill-height">
                <v-col cols="12" md="6">
                    <v-container>
                        <v-row align="center" justify="center">
                            <slot/>
                        </v-row>
                    </v-container>
                </v-col>

                <v-col cols="12" md="6" v-if="mdAndUp" class="bg-lighten">
                    <v-img src="https://w.forfun.com/fetch/1b/1b5a9cce4912e14a150b0f40f1ceec4a.jpeg" cover height="100dvh" content-class="pa-md-16">
                        <h1 class="font-weight-black text-h1 text-center text-white" v-text="$t('Welcome')"/>
                    </v-img>
                </v-col>

            </v-row>

            <DialogsWrapper/>

        </v-main>
    </v-app>
</template>

