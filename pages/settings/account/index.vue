<script setup lang="ts">

const {data: user}: any = useAuth()
const {t} = useI18n()

useHead({
    titleTemplate: (title) => `${title} - ${t('Account')}`
})

</script>

<template>
    <v-row>

        <v-col cols="12" sm="5" md="4">
            <SettingsAccountDetails :data="{name: user.data.name, email: user.data.email}"/>
        </v-col>

        <v-col cols="12" sm="7" md="8">
            <SettingsAccountRoles :data="user.data.roles"/>
        </v-col>

    </v-row>
</template>
