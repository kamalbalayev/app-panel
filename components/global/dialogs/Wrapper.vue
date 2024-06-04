<script setup lang="ts">
const {state}:any = useStore()
const dialogs = computed(() => state.dialogs)
</script>

<template>
    <DialogsDialog v-for="(dialog, i) in dialogs" :dialog="dialog" :index="i" :length="dialogs.length"
                   :key="`dialog-${i}`"/>
</template>

