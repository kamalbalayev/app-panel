<script setup lang="ts">

const {$routeName} = useNuxtApp()
const {smAndDown} = useDisplay()
const {state} = useStore()
const {t} = useI18n()

const title = computed(() => {
    switch ($routeName.value) {

        case 'settings-account':
            return t('Account')

        case 'settings-roles':
            return t('Roles')

        case 'settings-users':
            return t('Users')
    }
})

</script>

<template>

    <v-toolbar app flat :height="56" color="surface" class="border-b">

        <v-app-bar-nav-icon v-if="smAndDown" @click="state.settingsSidebar = !state.settingsSidebar"/>

        <v-app-bar-title class="font-weight-bold text-h6" v-text="title"/>

    </v-toolbar>

    <SettingsNavDrawer style="left: 64px !important;"/>

    <v-container class="container-sm pa-3 pa-md-6">
        <NuxtPage/>
    </v-container>

</template>
