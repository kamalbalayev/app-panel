<script setup lang="ts">
defineProps<{data: any}>()
</script>

<template>
    <v-card variant="flat" class="pa-6 pa-md-8 mb-4 text-center" color="lighten">

        <v-avatar size="100" class="mb-4" color="white">
            <v-icon icon="mdi-account-outline" size="50" color="primary"/>
        </v-avatar>

        <h2 v-text="data.name" class="font-weight-black text-body-1 d-block mb-1"/>

        <span v-text="data.email" class="text-caption text-gray d-block"/>

    </v-card>
</template>
