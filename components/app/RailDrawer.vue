<script setup lang="ts">

const runtimeConfig = useRuntimeConfig()
const {appName} = runtimeConfig.public
const {mdAndUp} = useDisplay()
const sideBar = ref(mdAndUp.value)

</script>

<template>
    <v-navigation-drawer v-model="sideBar" app rail :rail-width="64" touchless permanent location="start" style="left: 0 !important;">

        <template #prepend>
            <v-btn :to="localePath({name: 'index'})" exect
                   icon variant="text" color="primary"
                   v-tooltip:end="appName" class="mx-2 my-1">
                <v-icon icon="mdi-car-brake-fluid-level" size="x-large"/>
            </v-btn>
            <v-divider class="mb-2"/>
        </template>

        <v-btn icon variant="text" color="primary" v-tooltip:end="$t('Cars')" class="mx-2 my-1">
            <v-icon icon="mdi-car-multiple"/>
        </v-btn>

        <v-btn icon variant="text" color="primary" v-tooltip:end="$t('Brands')" class="mx-2 my-1">
            <v-icon icon="mdi-cards-outline"/>
        </v-btn>

        <v-btn icon variant="text" color="primary" v-tooltip:end="$t('Models')" class="mx-2 my-1">
            <v-icon icon="mdi-star-four-points-circle-outline"/>
        </v-btn>

        <v-btn icon variant="text" color="primary" v-tooltip:end="$t('Posts')" class="mx-2 my-1">
            <v-icon icon="mdi-library-outline"/>
        </v-btn>

        <template #append>
            <v-divider/>
            <AppUserMenu/>
        </template>

    </v-navigation-drawer>
</template>