<script setup lang="ts">

const {t} = useI18n()

useHead({
    titleTemplate: (title) => `${title} - ${t('Sign up')}`
})

definePageMeta({
    layout: "auth",
    auth: {
        unauthenticatedOnly: true
    }
});

</script>

<template>
    <AuthSignUpForm/>
</template>

