<script setup lang="ts">

const {t} = useI18n()

useHead({
    titleTemplate: (title) => `${title} - ${t('Sign in')}`
})

definePageMeta({
    layout: "auth",
    auth: {
        unauthenticatedOnly: true,
        navigateAuthenticatedTo: '/',
    }
});

</script>

<template>
    <AuthSignInForm/>
</template>

