<script setup lang="ts">

const {$themeColorMode} = useNuxtApp()
const runtimeConfig = useRuntimeConfig()
const i18nHead = useLocaleHead()
const theme = useTheme()
const {t} = useI18n()

useServerSeoMeta({
    robots: 'noindex, nofollow'
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

        <AppRailDrawer/>

        <v-main>
            <slot/>
        </v-main>

        <DialogsWrapper/>

    </v-app>
</template>