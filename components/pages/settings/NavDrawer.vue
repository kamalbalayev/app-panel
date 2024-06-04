<script setup lang="ts">

const {state}: any = useStore()

</script>

<template>
    <v-navigation-drawer v-model="state.settingsSidebar" width="280" class="overflow-hidden">

        <template #prepend>

            <v-sheet :height="56" color="transparent" class="d-flex align-center pa-5">
                <h1 v-text="$t('Settings')" class="text-h5 font-weight-bold"/>
            </v-sheet>

            <v-divider/>

        </template>

        <AppNavMenu :nav-menu="state.settingsMenu"/>

    </v-navigation-drawer>
</template>