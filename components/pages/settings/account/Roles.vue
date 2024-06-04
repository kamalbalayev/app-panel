<script setup lang="ts">
defineProps<{data: any}>()
</script>

<template>

    <h2 v-text="$t('Roles')" class="mb-3"/>

    <v-card variant="flat" border class="d-flex align-center pa-2 mt-3"
            v-for="(role, i) in data" :key="`role-${i}`">

        <v-row no-gutters align="center">

            <v-col cols="12" sm="4" class="d-flex align-center">

                <v-avatar color="lighten" class="mr-2">
                    <v-icon icon="mdi-briefcase-account" color="primary"/>
                </v-avatar>

                <div>

                    <strong v-text="role.name" class="d-block"/>

                    <span class="d-block text-caption text-blue-grey">
                        {{$t('Created at')}}: <Date :date="role.created_at"/>
                    </span>

                </div>

            </v-col>

            <v-col cols="12" sm="8">
                <v-chip size="small" color="primary" v-text="permission.name"
                        v-for="(permission, p) in role.permissions"
                        :key="`role-${i}-permission-${p}`"/>
            </v-col>

        </v-row>

        <v-btn size="x-small" icon="mdi-pencil" color="primary" variant="tonal" class="ml-2"/>

    </v-card>

</template>
