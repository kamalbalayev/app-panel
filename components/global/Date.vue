<script setup lang="ts">

const props = defineProps<{
    date?: any
}>()

const dateTime = computed(() => new Intl.DateTimeFormat('uk', {
    timeZone: 'UTC',
    dateStyle: 'short',
    timeStyle: 'short',
}).format(props.date.value))

</script>

<template>
    <time v-if="!!date" :datetime="dateTime" v-text="dateTime"/>
</template>
